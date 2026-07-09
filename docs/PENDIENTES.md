# Pendientes técnicos

Deuda técnica y temas abiertos del proyecto. Cada entrada distingue lo **verificado**
de lo que es **hipótesis por confirmar**.

---

## Las imágenes de los posts no aparecen al compartir en redes sociales

**Estado:** abierto
**Impacto:** alto — afecta a todos los posts del blog
**Detectado:** 9 de julio de 2026, al publicar el post de colaboración con June

### Síntoma

Al compartir cualquier post en LinkedIn, Facebook o X, la miniatura que aparece
no es la imagen del post: es siempre el logo de FemCoders Club.

### Causa (verificado)

1. `index.html` declara una `og:image` fija apuntando a `FemCodersClubLogo.png`.
2. Cada post define sus propias `og:image` y `twitter:image` mediante `react-helmet`,
   que las inyecta en el DOM **desde el navegador, con JavaScript**.
3. Los crawlers de LinkedIn, Facebook y X **no ejecutan JavaScript**. Leen el HTML
   que devuelve el servidor, encuentran la `og:image` de `index.html` y se quedan
   con el logo. Nunca llegan a ver las metaetiquetas del post.
4. El script `build` de `package.json` **no ejecuta `react-snap`**. El prerenderizado
   solo ocurre en `build:local-seo`.

### Hipótesis por confirmar

- ¿Qué script usa el despliegue en producción? Si usa `build` y no `build:local-seo`,
  ningún post se está prerenderizando y eso explica el problema por completo.
- Revisar si la configuración `reactSnap` de `package.json` incluye las rutas de los
  posts individuales, o solo las páginas principales.

### Vías de solución (por evaluar, no decididas)

- **Prerenderizado.** Asegurar que el build de producción genera HTML estático por
  ruta con sus metaetiquetas. Es la vía más alineada con lo que ya existe en el
  proyecto (`react-snap`, `generateStaticPages.ts`).
- **Renderizado en servidor.** Resolvería el problema de raíz, pero implica cambiar
  la arquitectura de despliegue. Decisión difícilmente reversible.
- **Prerenderizado en el borde.** Servir HTML con metas correctas solo a los crawlers.

### Cómo verificar el arreglo

No basta con mirar el HTML. Usar los validadores oficiales, que además invalidan
la caché que estas plataformas mantienen de cada URL:

- LinkedIn Post Inspector
- Facebook Sharing Debugger
- Validador de tarjetas de X

> Nota: estas plataformas **cachean** la primera lectura de una URL. Aunque se
> arregle el HTML, la miniatura antigua puede persistir hasta forzar el rescrapeo
> desde esas herramientas.

---

## Los botones de compartir de Instagram y TikTok no comparten nada

**Estado:** abierto
**Impacto:** bajo
**Detectado:** 9 de julio de 2026

Los posts incluyen botones que apuntan a `instagram.com/?url=...` y
`tiktok.com/share?url=...`. Ninguna de las dos plataformas admite compartir una URL
externa por parámetro de consulta: el enlace abre la plataforma e ignora el `url`.

Decidir si se retiran esos dos botones o se sustituyen por "copiar enlace".

---

## El JSON-LD del post de Flexbox apunta a un logo inexistente

**Estado:** abierto
**Impacto:** bajo
**Detectado:** 9 de julio de 2026

En `src/features/Blog/posts/recursos/css/Flexbox.tsx`, el bloque `application/ld+json`
declara `logo: "https://www.femcodersclub.com/assets/logo.png"`.

Ese archivo **no existe**. El logo real es `/FemCodersClubLogo.png`, que es el que usa
el JSON-LD de la home. Corregir la ruta.

---

## Los posts no comparten un componente de datos estructurados

**Estado:** abierto
**Impacto:** medio

Solo dos posts tienen JSON-LD (`Flexbox.tsx` y `ColaboracionJune.tsx`), cada uno con
su bloque escrito a mano. Cuando haya un tercer caso real, extraer un componente
`<ArticleSchema>` que reciba título, fecha, imagen y autoría.

No hacerlo antes: con dos usos, la abstracción todavía no está justificada.
