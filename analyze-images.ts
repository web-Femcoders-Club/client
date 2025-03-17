import fs from "fs-extra";
import path from "path";
import fg from "fast-glob";
import { fileURLToPath } from "url";

// Definir __dirname manualmente (por compatibilidad con ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carpeta a analizar (TODAS las imágenes dentro de `public/`)
const imageFolder = path.join(__dirname, "public").replace(/\\/g, "/");

async function analyzeImages() {
  try {
    // Buscar imágenes en TODAS las carpetas dentro de `public/`
    const imageFiles = await fg([`${imageFolder}/**/*.{jpg,jpeg,png}`], { dot: true });

    // Obtener el tamaño de cada imagen
    const imagesWithSizes = await Promise.all(
      imageFiles.map(async (file) => {
        const stats = await fs.stat(file);
        return { file, sizeKB: Math.round(stats.size / 1024) };
      })
    );

    // Ordenar por tamaño (de mayor a menor)
    imagesWithSizes.sort((a, b) => b.sizeKB - a.sizeKB);

    return imagesWithSizes;
  } catch (error) {
    throw new Error("Error analizando imágenes: " + error);
  }
}

// 🔹 Solo imprime si el script se ejecuta directamente en la terminal
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  analyzeImages().then((images) => console.log(images));
}

export default analyzeImages;





