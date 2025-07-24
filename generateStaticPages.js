// generateStaticPages.js – Genera páginas estáticas optimizadas para SEO
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://localhost:4173'; // ⚠️ Ajusta este valor según el puerto que te dé Vite Preview
const OUTPUT_DIR = './dist-static';

// Rutas importantes a generar
const importantUrls = [
  '/',
  '/femcoders-quienes-somos',
  '/equipo',
  '/eventos',
  '/contacto',
  '/blog',
  '/login',
  '/recursos'
];

async function generateStaticPages() {
  console.log('🚀 INICIANDO GENERACIÓN BRUTAL DE PÁGINAS ESTÁTICAS...');

  // Esperar 5 segundos para asegurarse de que el servidor está activo
  await new Promise(resolve => setTimeout(resolve, 5000));

  // Crear carpeta de salida si no existe
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Lanzar Puppeteer con configuración para HTTPS
  const browser = await puppeteer.launch({
    headless: 'new',
    ignoreHTTPSErrors: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Configurar agente de usuario como Bingbot
  await page.setViewport({ width: 1200, height: 800 });
  await page.setUserAgent('Mozilla/5.0 (compatible; Bingbot/2.0; +http://www.bing.com/bingbot.htm)');

  for (const url of importantUrls) {
    const fullUrl = `${BASE_URL}${url}`;
    const fileName = url === '/' ? 'index.html' : `${url.replace(/^\//, '').replace(/\//g, '-')}.html`;
    const filePath = path.join(OUTPUT_DIR, fileName);

    try {
      console.log(`📄 Generando: ${url}`);

      await page.goto(fullUrl, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      await page.waitForTimeout(2000); // Espera adicional por seguridad

      const html = await page.content();
      const optimizedHtml = optimizeHtmlForSEO(html, url);

      fs.writeFileSync(filePath, optimizedHtml, 'utf8');
      console.log(`✅ Guardado: ${fileName}`);
    } catch (error) {
      console.error(`❌ Error generando ${url}: ${error.message}`);
    }
  }

  await browser.close();

  console.log('🎉 ¡GENERACIÓN COMPLETADA! Bing va a estar FELIZ 🎉');
  console.log(`📁 Archivos guardados en: ${OUTPUT_DIR}`);
}

// Inserta JSON-LD estructurado para SEO
function optimizeHtmlForSEO(html, url) {
  const jsonLd = generateJsonLd(url);
  return html.replace(
    '</head>',
    `  <script type="application/ld+json">${JSON.stringify(jsonLd, null, 2)}</script>\n</head>`
  );
}

// Define estructuras semánticas específicas por URL
function generateJsonLd(url) {
  const base = "https://www.femcodersclub.com";

  const baseJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FemCoders Club",
    "url": base,
    "description": "Comunidad de mujeres en tecnología. Talleres, eventos y recursos para impulsar la carrera profesional de las mujeres en el sector tech.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${base}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const nav = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "hasPart": [
      { "@type": "SiteNavigationElement", "position": 1, "name": "Inicio", "url": `${base}/` },
      { "@type": "SiteNavigationElement", "position": 2, "name": "Sobre Nosotras", "url": `${base}/femcoders-quienes-somos` },
      { "@type": "SiteNavigationElement", "position": 3, "name": "Equipo", "url": `${base}/equipo` },
      { "@type": "SiteNavigationElement", "position": 4, "name": "Eventos", "url": `${base}/eventos` },
      { "@type": "SiteNavigationElement", "position": 5, "name": "Contacto", "url": `${base}/contacto` },
      { "@type": "SiteNavigationElement", "position": 6, "name": "Blog", "url": `${base}/blog` },
      { "@type": "SiteNavigationElement", "position": 7, "name": "Iniciar Sesión", "url": `${base}/login` }
    ]
  };

  switch (url) {
    case '/':
      return [baseJsonLd, nav, {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "FemCoders Club",
        "url": base,
        "logo": `${base}/logo.png`,
        "description": "Comunidad líder de mujeres en tecnología en España",
        "foundingDate": "2019",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+34-XXX-XXX-XXX",
          "contactType": "customer support"
        }
      }];
    case '/femcoders-quienes-somos':
      return [baseJsonLd, {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Sobre FemCoders Club",
        "description": "Conoce nuestra historia, misión y valores como comunidad de mujeres en tecnología"
      }];
    case '/eventos':
      return [baseJsonLd, {
        "@context": "https://schema.org",
        "@type": "EventSeries",
        "name": "Eventos FemCoders Club",
        "description": "Talleres, conferencias y networking para mujeres en tecnología"
      }];
    case '/blog':
      return [baseJsonLd, {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Blog FemCoders Club",
        "description": "Artículos sobre tecnología, carrera profesional y diversidad en tech"
      }];
    default:
      return [baseJsonLd, nav];
  }
}

// Ejecutar
generateStaticPages().catch(console.error);
