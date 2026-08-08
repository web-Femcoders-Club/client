/**
 * Genera las imágenes de vista previa para redes sociales.
 *
 * WhatsApp y Telegram no renderizan WebP, y varios posts usan .webp o .gif como
 * og:image. Este script deriva un JPEG 1200x630 de cada uno en dist/social/,
 * y el prerender apunta la meta al JPEG. Los .tsx de los posts no se tocan: la
 * conversión ocurre en build.
 *
 * No se puede sustituir el .webp por su original porque no todos lo tienen
 * (ResponsiveDesign, comunidadData y nadiaCavalleri solo existen en webp).
 */
import fs from "fs-extra";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";
import { getPostsIndex } from "./postsIndex";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const PUBLIC_DIR = path.join(ROOT, "public");
const DIST_DIR = path.join(ROOT, "dist");
const SOCIAL_DIR = path.join(DIST_DIR, "social");
const SITE_URL = "https://www.femcodersclub.com";

/** Dimensiones que Facebook, LinkedIn, WhatsApp y X esperan para la tarjeta grande. */
const WIDTH = 1200;
const HEIGHT = 630;

/** Formatos que hay que convertir. El resto (jpg/png) ya lo entienden todas. */
const NEEDS_CONVERSION = new Set([".webp", ".gif", ".avif"]);

/**
 * Convierte una og:image absoluta en la ruta de fichero dentro de public/.
 *
 * Varios posts declaran /assets/<x>.webp cuando en disco solo existe el .png
 * y el .webp vive bajo public-optimized/. Esas URLs son un 404 en producción,
 * así que se prueban las ubicaciones alternativas antes de darse por vencido.
 */
function toLocalPath(imageUrl: string): string | null {
  if (!imageUrl.startsWith(SITE_URL)) return null;
  const rel = decodeURIComponent(imageUrl.slice(SITE_URL.length));

  const candidates = [
    path.join(PUBLIC_DIR, rel),
    // Mismo nombre bajo public-optimized/desktop
    path.join(PUBLIC_DIR, "public-optimized", "desktop", rel),
    // Mismo directorio, pero con el formato original
    ...[".png", ".jpg", ".jpeg"].map((ext) =>
      path.join(PUBLIC_DIR, rel.replace(/\.[^.]+$/, ext))
    ),
  ];

  return candidates.find((candidate) => fs.pathExistsSync(candidate)) ?? null;
}

/** Nombre estable del derivado, sin colisiones entre carpetas distintas. */
function socialName(imageUrl: string): string {
  const rel = imageUrl.slice(SITE_URL.length).replace(/^\/+/, "");
  return rel.replace(/[/\\]/g, "-").replace(/\.[^.]+$/, "") + ".jpg";
}

export interface SocialImageMap {
  /** og:image original -> URL absoluta del JPEG derivado */
  [originalUrl: string]: string;
}

export async function generateSocialImages(): Promise<SocialImageMap> {
  const posts = getPostsIndex();
  const map: SocialImageMap = {};

  const pending = [...new Set(posts.map((p) => p.image).filter(Boolean))].filter(
    (url) => NEEDS_CONVERSION.has(path.extname(url).toLowerCase())
  );

  if (!pending.length) {
    console.log("No hay imagenes que convertir para redes sociales");
    return map;
  }

  await fs.ensureDir(SOCIAL_DIR);

  let converted = 0;
  for (const imageUrl of pending) {
    const source = toLocalPath(imageUrl);
    if (!source) {
      console.warn(`  ⚠️  no encontrada, se deja el original: ${imageUrl}`);
      continue;
    }

    const outName = socialName(imageUrl);
    const outPath = path.join(SOCIAL_DIR, outName);

    try {
      await sharp(source, { animated: false })
        .resize(WIDTH, HEIGHT, {
          fit: "cover",
          position: "attention",
        })
        .jpeg({ quality: 82, progressive: true })
        .toFile(outPath);

      map[imageUrl] = `${SITE_URL}/social/${outName}`;
      converted++;
    } catch (error) {
      // Un fallo aquí solo significa que ese post conserva su webp: degrada al
      // comportamiento actual en vez de romper el build.
      console.warn(
        `  ⚠️  no se pudo convertir ${imageUrl}: ${(error as Error).message}`
      );
    }
  }

  console.log(
    `Imagenes sociales generadas: ${converted}/${pending.length} (JPEG ${WIDTH}x${HEIGHT})`
  );
  return map;
}

// Ejecutable de forma independiente para depurar.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateSocialImages().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
