import fs from "fs-extra";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

// Definir __dirname manualmente (para compatibilidad con ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📂 Carpeta de entrada y salida
const inputFolder = path.join(__dirname, "public");
const outputFolderOptimized = path.join(__dirname, "public-optimized");
const outputFolderDesktop = path.join(outputFolderOptimized, "desktop");
const outputFolderMobile = path.join(outputFolderOptimized, "mobile");

// Crear carpetas si no existen
fs.ensureDirSync(outputFolderDesktop);
fs.ensureDirSync(outputFolderMobile);

// 📌 Imágenes de fondo con tratamiento especial
const backgroundImages = new Set(["bg1.png", "bg2.png", "bg3.png", "bg4.png", "bg5.png"]);

// 📌 Tamaño mínimo para optimizar (evita imágenes pequeñas)
const MIN_SIZE_KB = 100;

// 🔍 Función para obtener todas las imágenes dentro de `public/`
const getAllImages = (dir: string): string[] => {
  let results: string[] = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImages(filePath));
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      results.push(filePath);
    }
  });

  return results;
};

// 🔍 Función para encontrar todas las carpetas en `public-optimized`
const getAllFolders = (dir: string): string[] => {
  let results: string[] = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      results.push(filePath);
      results = results.concat(getAllFolders(filePath)); // Buscar en subcarpetas
    }
  });

  return results;
};

async function optimizeImages() {
  try {
    console.log("🔍 Buscando imágenes en `public/` y subcarpetas...");

    // Obtener todas las imágenes JPG/PNG
    const imageFiles = getAllImages(inputFolder);

    for (const file of imageFiles) {
      const relativePath = path.relative(inputFolder, file);
      const fileName = path.basename(file);
      const outputDesktopPath = path.join(outputFolderDesktop, relativePath).replace(/\.(jpg|jpeg|png)$/, ".webp");
      const outputMobilePath = path.join(outputFolderMobile, relativePath).replace(/\.(jpg|jpeg|png)$/, ".webp");

      // 📌 Crear carpetas necesarias en `public-optimized`
      fs.ensureDirSync(path.dirname(outputDesktopPath));
      fs.ensureDirSync(path.dirname(outputMobilePath));

      // 🔥 Si la imagen ya está optimizada en WebP, saltarla
      if (fs.existsSync(outputDesktopPath) && fs.existsSync(outputMobilePath)) {
        console.log(`✅ Ya optimizada: ${fileName}`);
        continue;
      }

      // 📌 Obtener tamaño del archivo
      const stats = fs.statSync(file);
      const sizeKB = stats.size / 1024;

      if (sizeKB < MIN_SIZE_KB) {
        console.log(`⚠️ Omitiendo imagen pequeña: ${fileName} (${sizeKB.toFixed(2)} KB)`);
        continue;
      }

      console.log(`📷 Optimizando imagen: ${fileName} (${sizeKB.toFixed(2)} KB)`);

      // 📌 Si es imagen de fondo, usar 1920px de ancho y calidad 85%
      if (backgroundImages.has(fileName)) {
        await sharp(file)
          .resize({ width: 1920, withoutEnlargement: true })
          .toFormat("webp", { quality: 85 })
          .toFile(outputDesktopPath);
      } else {
        // 📌 Optimización estándar (1200px escritorio, 800px móvil)
        await sharp(file)
          .resize({ width: 1200, withoutEnlargement: true })
          .toFormat("webp", { quality: 80 })
          .toFile(outputDesktopPath);

        await sharp(file)
          .resize({ width: 800, withoutEnlargement: true })
          .toFormat("webp", { quality: 70 })
          .toFile(outputMobilePath);
      }
    }

    // Copiar imágenes optimizadas a `public/` para que Railway pueda servirlas
    const outputFolderPublicOptimized = path.join(__dirname, "public", "public-optimized");
    fs.copySync(outputFolderOptimized, outputFolderPublicOptimized);

    console.log(`✅ TODAS las imágenes han sido optimizadas correctamente en:`);
    console.log(`   🖥️ ${outputFolderDesktop} (Escritorio)`);
    console.log(`   📱 ${outputFolderMobile} (Móvil)`);
  } catch (error) {
    console.error("❌ Error optimizando imágenes:", error);
  }
}

// 📂 Mostrar todas las carpetas dentro de `public-optimized`
console.log("📂 Carpetas en `public-optimized`:", getAllFolders(outputFolderOptimized));

// 🚀 Ejecutar optimización
optimizeImages();









