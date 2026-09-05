# FemCoders Club — Frontend

Web pública y panel de administración de [femcodersclub.com](https://www.femcodersclub.com).
React + TypeScript + Vite.

El backend vive en un repositorio aparte:
[web-Femcoders-Club/server](https://github.com/web-Femcoders-Club/server).

---

## Requisitos

| | |
| --- | --- |
| **Node** | **≥ 20.19** (declarado en `engines`) |
| **pnpm** | **9** — fijada en `packageManager`, la activa Corepack |

La versión de Node no es una recomendación: **Vite 7 llama a `crypto.hash`, que
no existe antes de 20.19**. Con una versión anterior, `vite build` y `vite dev`
fallan con `crypto.hash is not a function` — un error que no menciona Node por
ningún lado y que se confunde con facilidad con un problema del proyecto.

La de pnpm tampoco: **desde la 10 los scripts de instalación vienen desactivados
por defecto**, y son los que compilan el binario de `sharp` del que depende
`pnpm optimize`. Por eso la versión va fijada en `packageManager` — Corepack la
activa al entrar en el repositorio, sin que haya que acordarse — y CI instala
con esa misma 9.

---

## Arrancar en local

```bash
pnpm install
cp .env.example .env     # y rellenar VITE_API_URL
pnpm dev                 # http://localhost:5173
```

Solo hace falta **una** variable de entorno:

```
VITE_API_URL=https://server-femcoders.up.railway.app
```

Apuntando a producción se ve la web con datos reales. Para trabajar contra un
backend local, `http://localhost:3000`.

Las variables `VITE_*` **acaban dentro del bundle que se sirve al navegador**:
son públicas por definición. Nada secreto puede vivir aquí — las claves de API,
los tokens y las credenciales van en el servidor.

---

## Scripts

### Los del día a día

| Script | Qué hace |
| --- | --- |
| `pnpm dev` | servidor de desarrollo con recarga en caliente |
| `pnpm build` | build de producción (hace bastantes cosas, ver abajo) |
| `pnpm preview` | sirve el `dist/` ya construido, para revisar el resultado real |
| `pnpm lint` | ESLint sobre `ts` y `tsx`, sin tolerar avisos |

### Los que generan contenido

Se ejecutan solos dentro de `build`, pero se pueden lanzar sueltos:

| Script | Qué hace |
| --- | --- |
| `pnpm validate:posts` | comprueba que los posts del blog tienen sus metadatos. Corta el build si falta alguno |
| `pnpm generate:llms` | genera `llms.txt`, el índice del sitio para modelos de lenguaje |
| `pnpm generate-sitemap` | genera el `sitemap.xml` |
| `pnpm prerender` | materializa un HTML por ruta pública con sus metaetiquetas |
| `pnpm optimize` | convierte y comprime las imágenes de `public/` |

### Qué hace `pnpm build`, en orden

```
prebuild:  validate:posts  →  generate:llms  →  generate-sitemap
build:     optimize  →  tsc  →  vite build  →  prerender
```

**El `prerender` no es un adorno.** Los crawlers de LinkedIn, Facebook y X no
ejecutan JavaScript: leen el HTML que devuelve el servidor. Sin un HTML por
ruta, todos los posts compartirían las metaetiquetas genéricas de `index.html`
y la miniatura al compartir sería siempre el logo.

---

## Estructura

```
src/
├── api/          llamadas al backend, agrupadas por área (adminApi, userApi…)
├── components/   componentes compartidos entre features
├── context/      contextos de React
├── features/     una carpeta por área funcional
│   ├── Admin/        panel de administración
│   ├── Blog/         posts y recursos
│   ├── Achievements/ logros de las usuarias
│   └── …
├── hooks/        hooks reutilizables
├── router/       rutas de la aplicación
├── types/        tipos compartidos
└── utils/        utilidades sin estado
```

Dentro de cada feature se repite el patrón `page/` (pantallas completas) y
`components/` (piezas de esa feature). Lo que se usa en más de una feature sube
a `src/components/`.

`scripts/` queda fuera de `src/`: son herramientas de build escritas en
TypeScript que se ejecutan con `tsx`, no forman parte de la aplicación.

---

## Despliegue

Railway, con **Nixpacks**. No hay `Dockerfile`.

- Nixpacks no encuentra una fase de build declarada, así que ejecuta el script
  `build` de `package.json`.
- `nixpacks.toml` solo declara el arranque: `npx serve dist -l $PORT`.

**Ese comando no lleva `-s` a propósito**, y el fichero lo explica con las
mediciones que lo justifican: cualquier regla que capture la ruta de un post
—la flag `-s`, un rewrite catch-all— impide servir el HTML que genera el
prerender, que es justo el que lleva su `og:image`. El build produce un
`index.html` por ruta pública y un `404.html` con la SPA, y `serve` devuelve ese
`404.html` cuando no encuentra fichero: así las rutas privadas, las que llevan
parámetros y las que se añadan en el futuro siguen resolviéndose en el
navegador.

**Mergear no despliega.** Railway deja los despliegues esperando aprobación
manual; hasta que se apruebe, la URL sigue sirviendo la versión anterior.

---

## Deuda técnica y pendientes

En las [issues del repositorio](https://github.com/web-Femcoders-Club/client/issues).
Ahí es donde se anotan: un archivo paralelo con pendientes acaba siendo un sitio
que nadie mira.

---

## Sobre FemCoders Club

FemCoders Club es una **asociación legalmente constituida** dedicada a empoderar
a mujeres en el ámbito tecnológico, ofreciendo espacios para aprender, crecer y
destacar en la industria tech.

La web reúne lo que hace la comunidad: quiénes somos y nuestra misión; el equipo
de cofundadoras y quienes han contribuido a que crezca; los eventos, con un
carrusel que rinde homenaje a las ponentes que han compartido sus conocimientos;
el blog con contenido técnico; la bolsa de empleo; y las vías para contactar con
nosotras.

Si te apasiona la tecnología y quieres conocer a otras mujeres del sector,
[únete a la comunidad](https://www.femcodersclub.com).

#FemCodersClub #MujeresEnTecnologia #Frontend
