// src/utils/generate-sitemap.ts
// import { SitemapStream, SitemapItemLoose, EnumChangefreq } from 'sitemap';
// import { createWriteStream } from 'fs';
// import { Readable } from 'stream';
// import { resolve, dirname } from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const hostname = 'https://www.femcodersclub.com';

// const currentDate = new Date().toISOString().slice(0, 10);

// const publicRoutes: SitemapItemLoose[] = [
//   { url: '/', changefreq: EnumChangefreq.WEEKLY, priority: 1.0, lastmod: currentDate },
//   { url: '/contacto', changefreq: EnumChangefreq.MONTHLY, priority: 0.7, lastmod: currentDate },
//   { url: '/eventos', changefreq: EnumChangefreq.WEEKLY, priority: 0.9, lastmod: currentDate },
//   { url: '/femcoders-quienes-somos', changefreq: EnumChangefreq.MONTHLY, priority: 0.8, lastmod: currentDate },
//   { url: '/blog', changefreq: EnumChangefreq.WEEKLY, priority: 0.8, lastmod: currentDate },
//   { url: '/equipo', changefreq: EnumChangefreq.MONTHLY, priority: 0.7, lastmod: currentDate },
//   { url: '/login', changefreq: EnumChangefreq.MONTHLY, priority: 0.5, lastmod: currentDate },
//   { url: '/register', changefreq: EnumChangefreq.MONTHLY, priority: 0.5, lastmod: currentDate },

//   { url: '/blog/noticias', changefreq: EnumChangefreq.WEEKLY, priority: 0.8, lastmod: currentDate },
//   { url: '/blog/recursos', changefreq: EnumChangefreq.WEEKLY, priority: 0.8, lastmod: currentDate },
  
  
//   { url: '/noticias/Aniversario', changefreq: EnumChangefreq.MONTHLY, priority: 0.7, lastmod: currentDate },
//   { url: '/noticias/Bienvenido2025', changefreq: EnumChangefreq.MONTHLY, priority: 0.7, lastmod: currentDate },
//   { url: '/noticias/FelicitacionNavidad', changefreq: EnumChangefreq.MONTHLY, priority: 0.7, lastmod: currentDate },
  
  
//   { url: '/recursos/html/introduccion-html', changefreq: EnumChangefreq.MONTHLY, priority: 0.6, lastmod: currentDate },
//   { url: '/recursos/html/elementos-html-clave', changefreq: EnumChangefreq.MONTHLY, priority: 0.6, lastmod: currentDate },
//   { url: '/recursos/html/html-semantico', changefreq: EnumChangefreq.MONTHLY, priority: 0.6, lastmod: currentDate },
//   { url: '/recursos/html/formularios-y-tablas', changefreq: EnumChangefreq.MONTHLY, priority: 0.6, lastmod: currentDate },
//   { url: '/recursos/html/apis-html', changefreq: EnumChangefreq.MONTHLY, priority: 0.6, lastmod: currentDate },
//   { url: '/recursos/html/html-seo-accesibilidad', changefreq: EnumChangefreq.MONTHLY, priority: 0.6, lastmod: currentDate },
//   { url: '/recursos/html/integracion-frameworks', changefreq: EnumChangefreq.MONTHLY, priority: 0.6, lastmod: currentDate },
  
//   { url: '/recursos/css/introduccion-css', changefreq: EnumChangefreq.MONTHLY, priority: 0.6, lastmod: currentDate },
//   { url: '/recursos/css/selectores-css', changefreq: EnumChangefreq.MONTHLY, priority: 0.6, lastmod: currentDate },
//   { url: '/recursos/css/box-model', changefreq: EnumChangefreq.MONTHLY, priority: 0.6, lastmod: currentDate },
//   { url: '/recursos/css/flexbox', changefreq: EnumChangefreq.MONTHLY, priority: 0.6, lastmod: currentDate },
//   {url: '/recursos/css/css-grid', changefreq: EnumChangefreq.MONTHLY, priority: 0.6, lastmod: currentDate },


//   {url:"/recursos/react/nike-store-replica", changefreq: EnumChangefreq.MONTHLY, priority: 0.6, lastmod: currentDate },
// ];

// async function generateSitemap() {
//   const sitemap = new SitemapStream({ hostname });
//   const writeStream = createWriteStream(resolve(__dirname, '../../public/sitemap.xml'));
  
//   return new Promise((resolve, reject) => {
//     Readable.from(publicRoutes)
//       .pipe(sitemap)
//       .pipe(writeStream)
//       .on('finish', () => {
//         console.log('Sitemap generado exitosamente en public/sitemap.xml');
//         resolve(true);
//       })
//       .on('error', (error) => {
//         console.error('Error generando el sitemap:', error);
//         reject(error);
//       });
//   });
// }

// generateSitemap().catch(console.error);

// src/utils/generate-sitemap.ts
import { SitemapStream, EnumChangefreq, SitemapItemLoose } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import fg from 'fast-glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const hostname = 'https://www.femcodersclub.com';
const currentDate = new Date().toISOString().slice(0, 10);

// ❌ Rutas que no deben incluirse en el sitemap (requieren autenticación)
const excludedRoutes = [
  '/ofertas-de-trabajo',
  '/personaliza-perfil',
  '/presentaciones-destacadas',
  '/recursos-comunidad-femcoders-club',
  '/mentoria',
  '/enviar-documentacion',
  '/welcome',
  '/forgot-password',
];

// ✅ Rutas manuales que siempre deben estar en el sitemap
const staticRoutes: SitemapItemLoose[] = [
  { url: '/', changefreq: EnumChangefreq.WEEKLY, priority: 1.0, lastmod: currentDate },
  { url: '/contacto', changefreq: EnumChangefreq.MONTHLY, priority: 0.7, lastmod: currentDate },
  { url: '/eventos', changefreq: EnumChangefreq.WEEKLY, priority: 0.9, lastmod: currentDate },
  { url: '/femcoders-quienes-somos', changefreq: EnumChangefreq.MONTHLY, priority: 0.8, lastmod: currentDate },
  { url: '/blog', changefreq: EnumChangefreq.WEEKLY, priority: 0.8, lastmod: currentDate },
  { url: '/equipo', changefreq: EnumChangefreq.MONTHLY, priority: 0.7, lastmod: currentDate },
  { url: '/login', changefreq: EnumChangefreq.MONTHLY, priority: 0.5, lastmod: currentDate },
  { url: '/register', changefreq: EnumChangefreq.MONTHLY, priority: 0.5, lastmod: currentDate },
];

// 🧠 Generar rutas dinámicas desde carpetas de posts
async function getDynamicRoutes(): Promise<SitemapItemLoose[]> {
  const baseDirs = ['src/features/Blog/posts/recursos', 'src/features/Blog/posts/noticias'];
  const pattern = baseDirs.map(dir => `${dir}/**/*.tsx`);
  const entries = await fg(pattern);

  return entries
    .map(filePath => {
      const cleanPath = filePath
        .replace(/^src\/features\/Blog\/posts/, '') // quitamos la raíz
        .replace(/\/index\.tsx$/, '') // quitamos index.tsx si lo hay
        .replace(/\.tsx$/, ''); // quitamos extensión .tsx

      return cleanPath;
    })
    .filter(route => !excludedRoutes.includes(route)) // excluimos rutas protegidas
    .map(route => ({
      url: route,
      changefreq: EnumChangefreq.MONTHLY,
      priority: 0.6,
      lastmod: currentDate,
    }));
}

// 🗺️ Generar sitemap
async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });
  const writeStream = createWriteStream(resolve(__dirname, '../../public/sitemap.xml'));

  const dynamicRoutes = await getDynamicRoutes();
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  return new Promise((resolve, reject) => {
    Readable.from(allRoutes)
      .pipe(sitemap)
      .pipe(writeStream)
      .on('finish', () => {
        console.log('✅ Sitemap generado exitosamente en public/sitemap.xml');
        resolve(true);
      })
      .on('error', error => {
        console.error('❌ Error generando el sitemap:', error);
        reject(error);
      });
  });
}

// 🚀 Ejecutar
generateSitemap().catch(console.error);
