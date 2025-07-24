// generateStaticPages.js - Genera páginas estáticas BRUTALMENTE
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

// URLs más importantes para Bing
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

const baseUrl = 'http://localhost:5173'; // Puerto de Vite dev
const outputDir = './dist-static';

async function generateStaticPages() {
  console.log('🚀 INICIANDO GENERACIÓN BRUTAL DE PÁGINAS ESTÁTICAS...');
  
  // Crear directorio de salida
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Configurar viewport y user agent
  await page.setViewport({ width: 1200, height: 800 });
  await page.setUserAgent('Mozilla/5.0 (compatible; Bingbot/2.0; +http://www.bing.com/bingbot.htm)');

  for (const url of importantUrls) {
    try {
      console.log(`📄 Generando: ${url}`);
      
      const fullUrl = `${baseUrl}${url}`;
      await page.goto(fullUrl, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });

      // Esperar un poco más para que todo se renderice
      await page.waitForTimeout(2000);

      // Obtener el HTML completo renderizado
      const html = await page.content();

      // Limpiar y mejorar el HTML para SEO
      const optimizedHtml = optimizeHtmlForSEO(html, url);

      // Determinar nombre del archivo
      const fileName = url === '/' ? 'index.html' : `${url.replace(/^\//, '').replace(/\//g, '-')}.html`;
      const filePath = path.join(outputDir, fileName);

      // Guardar archivo
      fs.writeFileSync(filePath, optimizedHtml, 'utf8');
      console.log(`✅ Guardado: ${fileName}`);

    } catch (error) {
      console.error(`❌ Error generando ${url}:`, error.message);
      // Continúa con la siguiente página incluso si hay errores
    }
  }

  await browser.close();
  console.log('🎉 ¡GENERACIÓN COMPLETADA! Bing va a estar FELIZ 🎉');
  console.log(`📁 Archivos guardados en: ${outputDir}`);
}

function optimizeHtmlForSEO(html, url) {
  // Inyectar JSON-LD estructurado según la página
  const jsonLd = generateJsonLd(url);
  
  // Insertar JSON-LD antes del cierre de </head>
  const optimizedHtml = html.replace(
    '</head>',
    `  <script type="application/ld+json">${JSON.stringify(jsonLd, null, 2)}</script>\n</head>`
  );

  return optimizedHtml;
}

function generateJsonLd(url) {
  const baseJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FemCoders Club",
    "url": "https://www.femcodersclub.com",
    "description": "Comunidad de mujeres en tecnología. Talleres, eventos y recursos para impulsar la carrera profesional de las mujeres en el sector tech.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.femcodersclub.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Navegación del sitio
  const siteNavigation = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "hasPart": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Inicio",
        "description": "Página principal de FemCoders Club",
        "url": "https://www.femcodersclub.com/"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Sobre Nosotras",
        "description": "Conoce más sobre FemCoders Club y nuestra misión",
        "url": "https://www.femcodersclub.com/femcoders-quienes-somos"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Equipo",
        "description": "Conoce al equipo detrás de FemCoders Club",
        "url": "https://www.femcodersclub.com/equipo"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Eventos",
        "description": "Próximos eventos y talleres para mujeres en tecnología",
        "url": "https://www.femcodersclub.com/eventos"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Contacto",
        "description": "Ponte en contacto con FemCoders Club",
        "url": "https://www.femcodersclub.com/contacto"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "Blog",
        "description": "Artículos, recursos y noticias sobre mujeres en tecnología",
        "url": "https://www.femcodersclub.com/blog"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 7,
        "name": "Iniciar Sesión",
        "description": "Accede a tu cuenta de FemCoders Club",
        "url": "https://www.femcodersclub.com/login"
      }
    ]
  };

  // JSON-LD específico según la página
  switch (url) {
    case '/':
      return [baseJsonLd, siteNavigation, {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "FemCoders Club",
        "url": "https://www.femcodersclub.com",
        "logo": "https://www.femcodersclub.com/logo.png",
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
      return [baseJsonLd, siteNavigation];
  }
}

// Ejecutar la generación
generateStaticPages().catch(console.error);