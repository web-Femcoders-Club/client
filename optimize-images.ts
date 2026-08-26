import fs from "fs-extra";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

// Definir __dirname manualmente (para compatibilidad con ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📂 Rutas de carpetas
const inputFolder = path.join(__dirname, "public");
const publicOptimizedFolder = path.join(inputFolder, "public-optimized");
const desktopFolder = path.join(publicOptimizedFolder, "desktop");
const mobileFolder = path.join(publicOptimizedFolder, "mobile");

// 📌 Configuración
const CONFIG = {
  // Imágenes de fondo con tratamiento especial (alta resolución)
  backgroundImages: new Set(["bg1.webp", "bg2.webp", "bg3.webp", "bg4.webp", "bg5.webp"]),
  
  minSizeKB: 0,
  
  // Configuración para imágenes de fondo
  background: {
    width: 1920,
    quality: 85
  },
  
  // Configuración para imágenes normales
  desktop: {
    width: 1200,
    quality: 80
  },
  
  mobile: {
    width: 800,
    quality: 70
  },
  
  // Extensiones de imagen a procesar
  extensions: /\.(jpg|jpeg|png)$/i,

  // Configuración para GIFs animados → WebP animado (mucho más ligero).
  // El WebP se genera JUNTO al GIF original (mismo nombre, extensión .webp).
  gif: {
    // Ancho máximo: los GIFs enormes del blog se reducen; el logo (pequeño) no.
    maxWidth: 800,
    quality: 78,
    effort: 5,
  },

  // Verificar si se ha pasado el argumento --force
  forceReoptimize: process.argv.includes('--force')
};

/**
 * Obtiene todas las imágenes dentro de un directorio y sus subdirectorios
 * @param {string} dir - Directorio a explorar
 * @returns {string[]} - Lista de rutas de imágenes
 */
const getAllImages = (dir: string): string[] => {
  let results: string[] = [];
  
  try {
    const list = fs.readdirSync(dir);
    
    for (const file of list) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Evitar procesar la carpeta public-optimized para evitar duplicación
        if (path.basename(filePath) === 'public-optimized') {
          console.log(`📁 Saltando carpeta de optimización: ${filePath}`);
          continue;
        }
        
        // Recursión para buscar en subdirectorios
        results = [...results, ...getAllImages(filePath)];
      } else if (CONFIG.extensions.test(file)) {
        // Solo incluir archivos con extensiones de imagen
        results.push(filePath);
      }
    }
  } catch (error) {
    console.error(`❌ Error al explorar el directorio ${dir}:`, error.message);
  }
  
  return results;
};

/**
 * Determina si una imagen necesita ser optimizada
 * @param {string} originalPath - Ruta de la imagen original
 * @param {string} optimizedDesktopPath - Ruta de la versión optimizada para escritorio
 * @param {string} optimizedMobilePath - Ruta de la versión optimizada para móvil
 * @returns {boolean} - True si necesita optimización, false si no
 */
const needsOptimization = (originalPath: string, optimizedDesktopPath: string, optimizedMobilePath: string): boolean => {
  // Si se ha pasado --force, siempre optimizar
  if (CONFIG.forceReoptimize) {
    return true;
  }
  
  // Si alguno de los archivos optimizados no existe, necesita optimización
  if (!fs.existsSync(optimizedDesktopPath) || !fs.existsSync(optimizedMobilePath)) {
    return true;
  }
  
  try {
    // Verificar fechas de modificación
    const originalStat = fs.statSync(originalPath);
    const desktopStat = fs.statSync(optimizedDesktopPath);
    const mobileStat = fs.statSync(optimizedMobilePath);
    
    // Si la imagen original es más reciente que alguna de las optimizadas, necesita optimización
    return originalStat.mtime > desktopStat.mtime || originalStat.mtime > mobileStat.mtime;
  } catch (error) {
    // En caso de error, optimizar por precaución
    console.error(`⚠️ Error al verificar fechas de modificación:`, error.message);
    return true;
  }
};

/**
 * Determina la ruta de destino correcta para una imagen optimizada
 * @param {string} sourcePath - Ruta completa de la imagen original
 * @param {string} destFolder - Carpeta de destino (desktop o mobile)
 * @returns {string} - Ruta de destino para la imagen optimizada
 */
const getOutputPath = (sourcePath: string, destFolder: string): string => {
  // Obtener la ruta relativa al directorio 'public'
  const relativePath = path.relative(inputFolder, sourcePath);
  
  // Construir la ruta de destino y cambiar la extensión a .webp
  return path.join(destFolder, relativePath).replace(CONFIG.extensions, '.webp');
};

/**
 * Optimiza una imagen individual
 * @param {string} filePath - Ruta de la imagen original
 * @returns {Promise<boolean>} - True si se optimizó correctamente, false en caso contrario
 */
const optimizeImage = async (filePath: string): Promise<boolean> => {
  const fileName = path.basename(filePath);
  const stats = fs.statSync(filePath);
  const sizeKB = stats.size / 1024;
  
  // Construir rutas de salida
  const outputDesktopPath = getOutputPath(filePath, desktopFolder);
  const outputMobilePath = getOutputPath(filePath, mobileFolder);
  
  // Crear directorios de salida si no existen
  fs.ensureDirSync(path.dirname(outputDesktopPath));
  fs.ensureDirSync(path.dirname(outputMobilePath));
  
  // Verificar si la imagen necesita ser optimizada
  if (!needsOptimization(filePath, outputDesktopPath, outputMobilePath)) {
    console.log(`✅ Ya optimizada y actualizada: ${fileName}`);
    return false; // No fue necesario optimizar
  }
  
  // Omitir imágenes muy pequeñas si está configurado
  if (CONFIG.minSizeKB > 0 && sizeKB < CONFIG.minSizeKB) {
    console.log(`⚠️ Omitiendo imagen pequeña: ${fileName} (${sizeKB.toFixed(2)} KB)`);
    return false; // No se optimizó
  }
  
  console.log(`📷 Optimizando imagen: ${fileName} (${sizeKB.toFixed(2)} KB)`);
  
  try {
    // Optimización según el tipo de imagen
    if (CONFIG.backgroundImages.has(fileName)) {
      // Optimización para imágenes de fondo (solo versión desktop)
      await sharp(filePath)
        .resize({ width: CONFIG.background.width, withoutEnlargement: true })
        .toFormat("webp", { quality: CONFIG.background.quality })
        .toFile(outputDesktopPath);
      
      // Para imágenes de fondo, copiamos la misma versión a mobile para mantener consistencia
      fs.copyFileSync(outputDesktopPath, outputMobilePath);
    } else {
      // Optimización para versión desktop
      await sharp(filePath)
        .resize({ width: CONFIG.desktop.width, withoutEnlargement: true })
        .toFormat("webp", { quality: CONFIG.desktop.quality })
        .toFile(outputDesktopPath);
      
      // Optimización para versión mobile
      await sharp(filePath)
        .resize({ width: CONFIG.mobile.width, withoutEnlargement: true })
        .toFormat("webp", { quality: CONFIG.mobile.quality })
        .toFile(outputMobilePath);
    }
    
    console.log(`   ✅ Completado: ${fileName} → ${path.basename(outputDesktopPath)}`);
    return true; // Optimización exitosa
  } catch (error) {
    console.error(`   ❌ Error optimizando ${fileName}:`, error.message);
    return false; // Error en la optimización
  }
};

/**
 * Busca todos los .gif del proyecto (public y subcarpetas, sin public-optimized).
 */
const getAllGifs = (dir: string): string[] => {
  let results: string[] = [];
  try {
    for (const file of fs.readdirSync(dir)) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        if (path.basename(filePath) === "public-optimized") continue;
        results = [...results, ...getAllGifs(filePath)];
      } else if (/\.gif$/i.test(file)) {
        results.push(filePath);
      }
    }
  } catch (error) {
    console.error(`❌ Error explorando GIFs en ${dir}:`, error.message);
  }
  return results;
};

/**
 * Convierte un GIF animado a WebP animado (junto al original, mismo nombre).
 * Reduce los muy grandes al ancho máximo configurado; los pequeños se mantienen.
 */
const optimizeGif = async (filePath: string): Promise<boolean> => {
  const fileName = path.basename(filePath);
  const outputPath = filePath.replace(/\.gif$/i, ".webp");

  // Saltar si ya existe un .webp más reciente que el GIF (salvo --force)
  if (!CONFIG.forceReoptimize && fs.existsSync(outputPath)) {
    if (fs.statSync(filePath).mtime <= fs.statSync(outputPath).mtime) {
      console.log(`✅ GIF ya convertido: ${fileName}`);
      return false;
    }
  }

  const sizeKB = fs.statSync(filePath).size / 1024;
  console.log(`🎞️ Convirtiendo GIF: ${fileName} (${sizeKB.toFixed(0)} KB)`);

  try {
    // limitInputPixels: false → permite GIFs muy grandes (muchos frames);
    // el límite por defecto de sharp los rechaza ("exceeds pixel limit").
    const img = sharp(filePath, { animated: true, limitInputPixels: false });
    const meta = await img.metadata();
    // Solo reducir si supera el ancho máximo (el logo pequeño se queda igual)
    if (meta.width && meta.width > CONFIG.gif.maxWidth) {
      img.resize({ width: CONFIG.gif.maxWidth, withoutEnlargement: true });
    }
    const info = await img
      .webp({ quality: CONFIG.gif.quality, effort: CONFIG.gif.effort })
      .toFile(outputPath);
    const savedPct = ((1 - info.size / fs.statSync(filePath).size) * 100).toFixed(0);
    console.log(
      `   ✅ ${fileName} → ${path.basename(outputPath)} (${(info.size / 1024).toFixed(0)} KB, -${savedPct}%)`,
    );
    return true;
  } catch (error) {
    console.error(`   ❌ Error convirtiendo ${fileName}:`, error.message);
    return false;
  }
};

/**
 * Función principal que inicia el proceso de optimización
 */
async function optimizeImages() {
  console.log("\n🚀 INICIANDO PROCESO DE OPTIMIZACIÓN DE IMÁGENES\n");
  console.log(`📂 Carpeta origen: ${inputFolder}`);
  console.log(`📂 Carpeta destino: ${publicOptimizedFolder}`);
  
  if (CONFIG.forceReoptimize) {
    console.log("⚠️ Modo forzado: todas las imágenes serán reoptimizadas\n");
  }
  
 // Nota: No limpiamos todas las carpetas, solo marcamos para regeneración
if (CONFIG.forceReoptimize) {
  console.log("⚠️ Modo forzado: todas las imágenes serán reoptimizadas aunque ya existan");
  // NO usamos emptyDirSync que podría eliminar subcarpetas importantes
}
    
    // Crear carpetas de salida si no existen
    fs.ensureDirSync(desktopFolder);
    fs.ensureDirSync(mobileFolder);
    
    console.log("🔍 Buscando imágenes en `public/` y subcarpetas...");
    
    // Obtener todas las imágenes
    const imageFiles = getAllImages(inputFolder);
    console.log(`🖼️ Se encontraron ${imageFiles.length} imágenes para procesar\n`);
    
    // Contadores para estadísticas
    let optimizedCount = 0;
    let skippedCount = 0;
    let errorCount = 0;
    
    // Procesar cada imagen
    for (const file of imageFiles) {
      try {
        const wasOptimized = await optimizeImage(file);
        if (wasOptimized) {
          optimizedCount++;
        } else {
          skippedCount++;
        }
      } catch (error) {
        console.error(`❌ Error procesando imagen ${file}:`, error);
        errorCount++;
      }
    }
    
    // Procesar GIFs animados → WebP animado (junto al original)
    console.log("\n🎞️ Buscando GIFs animados para convertir a WebP...");
    const gifFiles = getAllGifs(inputFolder);
    console.log(`   Se encontraron ${gifFiles.length} GIF(s)\n`);
    let gifOptimizedCount = 0;
    for (const gif of gifFiles) {
      try {
        if (await optimizeGif(gif)) gifOptimizedCount++;
      } catch (error) {
        console.error(`❌ Error procesando GIF ${gif}:`, error);
        errorCount++;
      }
    }

    // Mostrar resumen
    console.log("\n✨ PROCESO COMPLETADO ✨");
    console.log(`✅ Imágenes optimizadas: ${optimizedCount}`);
    console.log(`⏭️ Imágenes omitidas: ${skippedCount}`);
    console.log(`🎞️ GIFs convertidos a WebP: ${gifOptimizedCount}`);

    if (errorCount > 0) {
      console.log(`❌ Errores encontrados: ${errorCount}`);
    }
    
    console.log(`\n📂 Imágenes optimizadas disponibles en:`);
    console.log(`   🖥️ ${desktopFolder} (Escritorio)`);
    console.log(`   📱 ${mobileFolder} (Móvil)`);
    
}

// 🚀 Ejecutar optimización
optimizeImages();









