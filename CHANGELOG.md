# Changelog

Cambios notables del frontend de FemCoders Club.
Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [No publicado]

### Navegación y menús laterales

#### Corregido
- **Salir del panel de administración obligaba a volver a iniciar sesión**: `/admin`
  no estaba enlazado en ningún sitio de la web. El desplegable del avatar ofrecía
  exactamente dos entradas —"Mi Perfil" y "Cerrar sesión"— fuera cual fuera el rol,
  y la barra de navegación tampoco llevaba al panel. Al salir a cualquier página
  pública la única vuelta era escribir la URL a mano, o cerrar sesión y volver a
  entrar, porque el login sí redirige a admin a `/admin`. Ahora el desplegable
  tiene tres entradas separadas para admin —Mi perfil, Panel de administración,
  Cerrar sesión—, con la de cerrar siempre la última (client#21).
- **El menú lateral quedaba tapado por la cabecera**: el menú se posicionaba en
  `top: 0` con `z-index: 40` y el header es `fixed` con `z-index: 1000`, así que
  la cabecera cubría su parte alta —incluido el botón de cerrar—. El header
  publica ahora su altura real en `--fem-header-height`, medida con un
  `ResizeObserver` en lugar de escrita a mano: el logo encoge por debajo de 768px
  y con el zoom del navegador crece todo, así que cualquier número fijo volvería
  a esconderlo.
- **El botón "Cerrar" del menú de bienvenida no cerraba nada en escritorio**:
  quitaba el estado, pero `lg:translate-x-0` mantenía el menú visible igualmente.
- **El menú contraído seguía siendo tabulable**: `-translate-x-full` lo sacaba de
  pantalla sin sacarlo del orden de tabulación, así que con Tab se entraba en un
  menú invisible. Ahora se combina `visibility` con `inert`.
- **El menú de bienvenida solo se abría pasando el ratón por encima**: su
  disparador era un `<div onClick>` que además solo respondía al clic
  `if (isTouchDevice)`. En un portátil no táctil con la ventana estrecha, hacer
  clic no hacía nada; con teclado no había forma de abrirlo. Sustituido por un
  `<button>` con `aria-expanded`.
- **La capa oscura del menú de bienvenida nunca oscureció nada**: era
  `bg-black/50`, sintaxis de Tailwind v3, y al navegador solo llega el CDN de la
  v2 (ver client#92). Lo mismo con `hover:bg-white/10`, `border-white/20` y
  `text-[#4737bb]`: escritas, visibles en el código, sin efecto. Lo que se veía
  blanco lo heredaba de un `text-white` del contenedor, no de la clase que
  aparentaba ponerlo. Reescrito con CSS propio y variables de `index.css`,
  siguiendo el precedente de `admin-ui.css`.
- **`Sidebar`, `Overlay` y `MenuTrigger` se definían dentro del cuerpo de
  `WelcomePage`**: React los trataba como tipos de componente nuevos en cada
  render y desmontaba y remontaba el menú entero, perdiendo el foco.
- **Seis encabezados falsos en el menú de bienvenida**: cada enlace se etiquetaba
  con un `<h2>`, ensuciando el esquema de la página para quien navega saltando de
  encabezado en encabezado. Ahora son enlaces, y el tamaño lo da el CSS.

#### Añadido
- **`CollapsibleSidebar`, menú lateral contraíble compartido** por el panel y la
  página de bienvenida (client#59). Variante `rail` para el panel —contraído deja
  una franja de iconos, para seguir viendo dónde se está— y `overlay` para
  bienvenida. Comunes a las dos: `aria-expanded` y `aria-controls`, `aria-label`
  por estado, preferencia recordada en `localStorage`, `prefers-reduced-motion`
  (WCAG 2.3.3, AAA) y foco visible en naranja porque el morado global no se
  distingue sobre el morado del menú. Cuando el menú tapa el contenido en pantalla
  estrecha añade semántica de diálogo —`aria-modal`, foco retenido y `Escape`—,
  reutilizando el contrato ya escrito en `StatusModal`.
- **El menú del panel deja de ocupar un cuarto de la pantalla**: `w-1/4` y `w-3/4`
  fijaban el ancho sin una sola media query, así que las tablas del CRM y de
  usuarias cedían ese espacio aunque no se estuviera navegando. Al contraer el
  menú, el área de trabajo lo recupera.
- **Contraste medido en lo nuevo**: saludo del menú 8.16:1 y cita motivacional
  13.5:1, ambos por encima del 7:1 de AAA. La cita pasa a fondo sólido en vez de
  imagen, porque sobre una foto el contraste no se puede garantizar.
- `Escape` cierra el desplegable del avatar y devuelve el foco al botón.

### Imágenes

#### Corregido
- **El avatar por defecto apuntaba a un archivo que nunca existió**: el `Header`
  guardaba `"/default-avatar.png"` cuando la usuaria no tenía avatar, y ese
  archivo no está en `public/`. Como la cadena es truthy, además anulaba el
  `|| "/FemCodersClubLogo.png"` del propio render: el fallback bueno estaba
  escrito y no se ejecutaba nunca. Toda usuaria sin avatar veía la imagen rota.
  Ahora se guarda `null` y decide el render, en un único sitio. `LoginForm`
  escribía la misma ruta fantasma en `sessionStorage` (clave que hoy no lee
  nadie); pasa a borrar la clave cuando no hay avatar.
- **`OptimizedImage` repetía indefinidamente cada petición fallida**: su `onError`
  se recuperaba escribiendo `imgElement.src` directamente en el DOM, y al
  siguiente render React devolvía el atributo a la ruta optimizada y se llevaba
  por delante el `onerror = null`. La imagen volvía a fallar en cada render, y
  el componente se rerenderiza con cada `resize`: por eso la consola mostraba
  decenas del mismo 404 en vez de uno. El fallo se recuerda ya en estado de
  React, así que la recuperación sobrevive a los renders; una `src` nueva vuelve
  a intentar su versión optimizada.

### Formularios y estilos

#### Corregido
- **Formulario de registro roto**: usaba clases de Tailwind que no tenían efecto
  (Tailwind está instalado pero su CSS nunca se importa en `main.tsx`). Reescrito
  con CSS propio (`RegisterForm.css`): campo de nombre visible, ojos de contraseña
  bien posicionados, anchura correcta, requisitos en rejilla de 2 columnas, y el
  formulario reorganizado en **2 columnas** (nombre+apellido, contraseña+repetir,
  teléfono+género) para no ser un scroll infinito. Responsive a 1 columna en móvil.
- **Formularios de contacto y Home**: estado de "Enviando…" (deshabilitan el botón,
  `aria-busy`) y mensaje de error visible (`role="alert"`) — antes el de Home solo
  hacía `console.error` y parecía colgarse.

#### Añadido
- **Consentimiento RGPD en Contacto y Home**: checkbox obligatorio de política de
  privacidad (abre el modal existente) antes de poder enviar. El registro ya lo tenía.
- Clases de formulario reutilizables en `index.css`: `.form-consent`, `.link-button`,
  `.form-error`, foco visible reforzado (WCAG AAA) y tokens `--color-success`/`--color-error`.

### Añadido
- **ProtectedRoute para el panel admin** (issue #11 / S4): componente que exige
  sesión con rol `admin` para acceder a `/admin/*`. Sin sesión → login; sin rol
  admin → welcome. La autorización real la impone el backend (guards de server#2);
  esta es la capa de UX. El login guarda ahora `userRole` en sessionStorage.

### Seguridad
- **`react-router-dom` 6.30.4 → 6.30.6**: cierra el open redirect con XSS
  (CVE-2026-53668). `resolveTo` tenía un atajo para URLs absolutas que dejaba
  pasar `//dominio.com` o `https:/dominio.com` como destino de `useNavigate` y
  `<Link>`; desde 6.30.6 todo destino se normaliza a ruta interna
  (`//evil.com` → `/evil.com`) y las rutas legítimas no cambian. Dependabot daba
  la alerta por «sin parche» porque el aviso se publicó antes que la versión.
- **`fast-uri` 3.1.5 → 3.1.7** (transitiva de `serve` → `ajv`): cierra cuatro
  avisos *high* de SSRF y confusión de host. Aquí `ajv` solo compila el esquema
  de configuración de `serve` al arrancar, así que la URL de una petición nunca
  llegaba al parser: es higiene de lockfile, no exposición cerrada.
- **`puppeteer` fuera de `devDependencies`**: arrastraba `extract-zip` 2.0.1
  (path traversal por symlink, **sin parche upstream**) y unos noventa paquetes
  más. No lo invocaba ningún script de `package.json` — su único uso vivía en
  `documentation/`, que no está versionado. Con él se va la entrada ya muerta
  `puppeteer: false` de `pnpm-workspace.yaml`.

  Las dos alertas *moderate* restantes de `react-router` no tienen parche en la
  rama v6 y no alcanzan a este código: la de hidratación SSR requiere Framework
  o Data Mode y aquí el router es declarativo (`BrowserRouter` + `Routes`), y la
  de open redirect por backslash requiere un destino de navegación que venga de
  fuera — no hay ninguno, todos los `navigate()` son literales y los `to={}`
  salen de listas internas. Detalle y criterio de reapertura en la issue #7.

### Cambiado
- **Export CSV/PDF del CRM** vía `fetch` con header `Authorization` (descarga por
  Blob) en vez de token en la query string — necesario desde que `/admin/*` exige
  Bearer token. Manejo de error con aviso a la usuaria.
- El saludo del panel usa el nombre de la sesión en vez de estar hardcodeado.

### Eliminado
- Ruta duplicada `/admin/comments` en el router (ya existe anidada bajo `/admin/*`,
  ahora protegida por el guard).
