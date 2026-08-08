import { createWriteStream, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { SitemapStream, EnumChangefreq, SitemapItemLoose } from 'sitemap';
import { Readable } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const hostname = 'https://www.femcodersclub.com';
const currentDate = new Date().toISOString().slice(0, 10);

// ❌ Rutas privadas/excluidas — fuente única compartida con el prerender
import { PRIVATE_ROUTES } from '../../scripts/privateRoutes';
import { getPostsIndex } from '../../scripts/postsIndex';

const excludedRoutes = PRIVATE_ROUTES;

// ✅ Rutas estáticas
const staticRoutes: SitemapItemLoose[] = [
  { url: '/', changefreq: EnumChangefreq.WEEKLY, priority: 1.0, lastmod: currentDate },
  { url: '/contacto', changefreq: EnumChangefreq.MONTHLY, priority: 0.7, lastmod: currentDate },
  { url: '/eventos', changefreq: EnumChangefreq.WEEKLY, priority: 0.9, lastmod: currentDate },
  { url: '/femcoders-quienes-somos', changefreq: EnumChangefreq.MONTHLY, priority: 0.8, lastmod: currentDate },
  { url: '/blog', changefreq: EnumChangefreq.WEEKLY, priority: 0.9, lastmod: currentDate },
  { url: '/blog/noticias', changefreq: EnumChangefreq.WEEKLY, priority: 0.8, lastmod: currentDate },
  { url: '/blog/recursos', changefreq: EnumChangefreq.WEEKLY, priority: 0.8, lastmod: currentDate },
  { url: '/equipo', changefreq: EnumChangefreq.MONTHLY, priority: 0.7, lastmod: currentDate },
  { url: '/login', changefreq: EnumChangefreq.MONTHLY, priority: 0.5, lastmod: currentDate },
];

// ✅ Extraer rutas del Router
function getAdditionalRoutesFromRouter(): SitemapItemLoose[] {
  try {
    const routerPath = resolve(process.cwd(), 'src/router/Router.tsx');
    const content = readFileSync(routerPath, 'utf-8');

    const routeRegex = /path="([^"]+)"/g;
    const routes: SitemapItemLoose[] = [];
    let match;

    // Fecha real de publicación por post, leída de su <Helmet>. Usar la fecha
    // de generación marcaría las 46 URLs como modificadas en cada build, lo que
    // anula el valor de lastmod como señal de rastreo para Google.
    const publishedByPath = new Map(
      getPostsIndex()
        .filter(post => post.publishedTime)
        .map(post => [post.path, post.publishedTime.slice(0, 10)])
    );

    while ((match = routeRegex.exec(content)) !== null) {
      const path = match[1];
      if (
        !path.includes('*') &&
        !path.includes(':') &&
        !excludedRoutes.some(ex => path.includes(ex)) &&
        !staticRoutes.some(sr => sr.url === path)
      ) {
        routes.push({
          url: path,
          changefreq: EnumChangefreq.MONTHLY,
          priority: path.includes('/noticias/') ? 0.7 : 0.8,
          lastmod: publishedByPath.get(path) ?? currentDate,
        });
      }
    }

    console.log(`🤖 Rutas extraídas desde Router.tsx: ${routes.length}`);
    return routes;
  } catch (error) {
    if (error instanceof Error) {
      console.warn('⚠️ Error al leer el Router:', error.message);
    } else {
      console.warn('⚠️ Error al leer el Router:', error);
    }
    return [];
  }
}

// 🧠 Generar sitemap
async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });
  const writeStream = createWriteStream(resolve(__dirname, '../../public/sitemap.xml'));

  const dynamicRoutes = getAdditionalRoutesFromRouter();

  const allRoutesMap = new Map<string, SitemapItemLoose>();
  staticRoutes.forEach(r => allRoutesMap.set(r.url, r));
  dynamicRoutes.forEach(r => {
    if (!allRoutesMap.has(r.url)) {
      allRoutesMap.set(r.url, r);
    }
  });

  const allRoutes = Array.from(allRoutesMap.values());

  console.log(`📊 Sitemap generado con:`)
  console.log(`   - Estáticas: ${staticRoutes.length}`);
  console.log(`   - Del router: ${dynamicRoutes.length}`);
  console.log(`   - Total únicas: ${allRoutes.length}`);

  return new Promise((resolve, reject) => {
    Readable.from(allRoutes)
      .pipe(sitemap)
      .pipe(writeStream)
      .on('finish', () => {
        console.log('✅ Sitemap creado en public/sitemap.xml');
        allRoutes.forEach(r => console.log(` - ${r.url} (${r.priority})`));
        resolve(true);
      })
      .on('error', reject);
  });
}

generateSitemap().catch(console.error);
