# Changelog

Cambios notables del frontend de FemCoders Club.
Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [No publicado]

### Acceso (rediseño): inicio de sesión, registro, contraseña y baja

#### Cambiado
- **«He olvidado mi contraseña», «Nueva contraseña» y /baja-email con el
  diseño del acceso**: título y tarjeta centrados (`AccesoCentrado`), sin la
  imagen lateral del logo ni estilos en línea. Avisos de éxito y error con icono
  y borde. Las llamadas al servidor y sus estados son los mismos; los enlaces
  internos ya no recargan la web y las tres tienen su `<title>`.

#### Corregido
- **«Nueva contraseña» decía que el enlace había caducado cuando la
  contraseña era débil.** El servidor responde 400 a las dos cosas y el
  formulario traducía todo 400 como enlace no válido. Ahora enseña los
  requisitos en vivo (los mismos del registro, `politicaContrasena.ts`) y no
  envía una contraseña que no los cumple.
- **El teléfono del registro se autocompletaba con «+34»** y la validación,
  que solo acepta dígitos, rechazaba el alta.
- **/register con el mismo diseño que /login**: «Tu lugar en la tecnología» y
  la frase «Aquí encontrarás…» escrita a mano, a la izquierda y fija al bajar;
  el formulario en una tarjeta más ancha, con los campos de dos en dos (uno por
  fila en móvil). El alta envía lo mismo que antes: misma validación, mismos
  consentimientos, mismos mensajes del servidor.
- **Registro más accesible**: autocompletado en nombre, apellido, correo y
  teléfono (teclado numérico en móvil); los requisitos de la contraseña dicen
  «Cumplido» o «Pendiente» al lector y ya no dependen de un verde y un gris que
  no llegaban a 3:1; el registro tiene por fin su `<title>`.
- **Metas de /register en `src/features/User/contenido.ts`**: las leen el
  `<Helmet>` y el prerender, sin copias.
- **/login con el diseño de /contacto**: saludo a la izquierda y tarjeta del
  formulario a la derecha con la capa en degradado, sobre `bg1`. Las siete
  palabras animadas (siete `h2` seguidos, sin `h1`) pasan a una frase, «Juntas
  crecemos en…», cuya última palabra se escribe a mano (Caveat, ya cargada para
  la portada) y se subraya con el rotulador. Tiene botón de pausa (WCAG 2.2.2) y
  se queda fija con «reducir movimiento»; el lector oye la frase una sola vez.
- **El inicio de sesión hace lo mismo que antes**: misma llamada, mismos datos
  de sesión, misma redirección por rol. Cambian el marcado y el aspecto:
  etiquetas fijas, autocompletado del correo, aviso de error con icono y borde
  (no solo color) y el enlace de contraseña olvidada después del campo, para no
  desviar el tabulador.
- **Los enlaces a «He olvidado mi contraseña» y al registro ya no recargan la
  web entera**: son enlaces de la SPA.
- **El ojo de la contraseña mide 40 px** y deja su hueco en el campo también en
  «Nueva contraseña».

#### Añadido
- **Piezas compartidas** en `rediseno.css`: `fc-campo` (etiqueta y campo) y
  `fc-aviso--error`; `--font-mano` en `index.css`.

#### Eliminado
- `LoginPage.css`, `LoginForm.css`, `RegisterForm.css` y
  `ForgotPasswordForm.css`, con la animación de palabras con desenfoque: ya no
  los usa ninguna página. `ForgotPasswordForm.css` redefinía además
  `.primary-button`, `.error-message` y `.success-message` para toda la web en
  cuanto alguien abría una de estas páginas.

### Contacto (rediseño)

#### Cambiado
- **/contacto pasa de cinco secciones a dos, sin Tailwind ni estilos en
  línea**: el formulario con los motivos para escribir (`bg1`) y «Sigue cerca de
  la comunidad» (`bg4`) con Slack, cuenta y eventos. Salen «¿Por qué
  contactarnos?», el bloque de Slack, la llamada final y «Email directo», que
  repetía el correo de arriba. Textos en `src/features/Contact/contenido.ts`.
- **El formulario envía lo mismo que antes**; cambian el aspecto y el marcado.
  Las etiquetas por fin están asociadas a sus campos (el lector leía «name»),
  hay autocompletado en nombre, apellidos y correo, y el borde de los campos
  supera 3:1.
- **Metadatos sin cifras que no casaban** («más de 1000», «miles», «la mayor
  comunidad»): título y descripción dicen para qué escribir.

#### Añadido
- **SEO y GEO**: el HTML servido de /contacto incluye el texto de la página y el
  JSON-LD de `ContactPage`, el punto de contacto de la Organization y la miga de
  pan. Imagen para compartir propia (`og-contacto.jpg`); la anterior apuntaba a
  un archivo que no existía.

#### Corregido
- **llms.txt ya no anuncia `partnerships@femcodersclub.com`**, que no existe. El
  bloque de contacto se genera desde la misma fuente que la página.

### Equipo (rediseño)

#### Cambiado
- **/equipo rediseñada entera y sin Tailwind**, con los fondos de la home: el
  equipo actual (`bg1`), «Nuestros valores» (`bg3`), «Una comunidad real» con
  cifras y alianzas (`bg4`) y «Sé parte del cambio» para empresas (`bg2`).
- **El h1 ya se ve**: la cabecera fija lo tapaba. Las tarjetas del equipo
  muestran la biografía de la base de datos íntegra, con el oficio bajo el
  nombre y el resto en «Leer más»; sale el modal que repetía el texto. Siguen
  rotando cada 30 s con `useRotacion`, el mismo de los carruseles de Inicio y
  «Quiénes somos», ahora en `src/hooks` junto a `BotonRotacion` en
  `src/components/ui`.
- **Cifras comprobadas**: fuera «15+ proyectos impulsados». Dentro 29
  repositorios en GitHub y 34 artículos técnicos, y las cifras de comunidad
  salen de `src/data/cifrasComunidad.ts`, compartido con Inicio.
- **Alianzas y colaboraciones** en una cinta infinita, cada una con el papel de
  FemCoders Club y enlace a su noticia. Se para con ratón, foco o botón y no se
  mueve con «reducir movimiento».
- **Empresas que han confiado en nosotras pasa a Inicio**, entre Proyectos y
  Contacto: una cinta con las 34 organizaciones de `src/data/colaboradoras.ts`,
  la misma lista que cuenta el panel (que pasa de 25 a 34).
- **«Quiero colaborar» llega a alguien**: escribía a `partnerships@`, que no
  existe. Ahora lleva a `/contacto` y muestra `info@femcodersclub.com`.
- **Los enlaces con ancla bajan hasta su sección** («/#empresas-titulo»), también
  dentro de la misma página, y la cabecera fija ya no tapa el destino ni el foco
  (`scroll-padding-top`).
- **Solo el equipo actual en la web**: las cofundadoras que ya no están siguen en
  la base de datos como constancia, pero salen de la página, del JSON-LD y de
  llms.txt.

#### Añadido
- **SEO y GEO**: el HTML servido de /equipo incluye los textos y las biografías
  (desde la API en cada build) y el JSON-LD de la página y de cada persona, con
  `@id` estables que también cita «Quiénes somos» (`scripts/fundadoras.ts`). La
  portada lleva las organizaciones colaboradoras en un `<noscript>` y como
  ItemList, y llms.txt gana bloques generados del equipo y de las colaboradoras.

#### Quitado
- `SponsorsARExperience`, `DaisyAvatars`, `SpecialThanksSection` y
  `PromoterCard` (código muerto o sustituido), `TeamPage.css` y ocho fotos
  personales que ya no usaba ninguna página.

#### Corregido
- La ficha «Y las que vienen» enlazaba a `/noticias`, que no existe.
- El `og:image` de Inicio apuntaba a un archivo que no existe.

### Aviso de cookies y «Volver arriba» (rediseño)

#### Cambiado
- **Aviso de cookies rediseñado**: tarjeta lavanda abajo a la izquierda en vez de
  franja a todo el ancho, con ✕ además de «Entendido». Sale la primera vez y se
  recuerda al cerrarlo; si el navegador bloquea el almacenamiento, se cierra
  igual. Va justo después del enlace de salto, para cerrarlo con el teclado sin
  recorrer la página, y mientras está abierto la página reserva su altura al
  llevar el foco a un elemento. Versión compacta en móvil estrecho y pantallas
  bajas. Sin icono fijo: con almacenamiento solo técnico no hay consentimiento
  que retirar.
- **Botón naranja en relieve** (`fc-boton--naranja`): tonos profundos del naranja
  de marca para que el blanco pase de 4,5:1 (AAA en texto grande).
- **«Volver arriba»** solo aparece al subir o al llegar al final de la página;
  en móvil mide 44px y espera a que se cierre el aviso de cookies.
- **Política de cookies al día**: enumera lo que la web guarda de verdad en el
  navegador (sesión, perfil y preferencias), explica que el almacenamiento local
  cuenta como cookies y menciona los vídeos de YouTube de algunas entradas del
  blog. La de privacidad deja de decir que no hay cookies de terceros ni datos
  personales guardados.

### Quiénes somos (rediseño)

#### Cambiado
- **Nueva primera sección de «Quiénes somos»**: texto a la izquierda y vídeo a la
  derecha, con el fondo de la portada (`bg1`) y las piezas compartidas `fc-`. El
  ancho del vídeo se ajusta también a la altura de la ventana para que la sección
  quepa en una pantalla de portátil.
- **El resto de la página, rediseñado con los fondos de la home** (`bg3`, `bg4`
  y `bg2` al cierre) y textos nuevos: «Nuestro propósito» (misión y visión),
  «Cómo lo hacemos», «Compromiso y valores» y «Nuestras ideas», separadas en
  lo que ya está en marcha y lo que viene. Piezas compartidas nuevas en
  `rediseno.css`: `fc-capa`, `fc-disco`, `fc-desplegable` y `fc-enlace--texto`.
- **Datos estructurados enlazados y en el HTML servido**: Organization,
  AboutPage y VideoObject se citan entre sí por `@id` (`#organization` y
  `#website` también en `index.html`) y los escribe el prerender, no el Helmet,
  así que los leen también los rastreadores que no ejecutan JavaScript. Sale
  `numberOfEmployees`, que en una asociación de voluntarias decía «6 empleadas».

#### Eliminado
- `CarouselValues.tsx`, `Collapse.tsx` y `AboutPage.css`, con su Tailwind, y los
  quince iconos PNG de la página antigua con sus WebP.

#### Corregido
- **Misión y visión solo se leían pasando el ratón**: eran tarjetas que giraban
  con `:hover`, ilegibles con teclado o en el móvil, donde además los dos
  párrafos de debajo estaban ocultos con `display: none`. Ahora todo está a la
  vista.
- **El carrusel de valores no se podía parar** (WCAG 2.2.2) y llevaba texto
  blanco sobre naranja. Ahora usa la lógica de los carruseles de la home
  (`useRotacion`) y los once valores están en el DOM: Google indexaba solo el
  que se veía al cargar.
- **«Nuestras ideas» se abrían con `div` clicables sin `aria-expanded`**, y la
  llamada final se ocultaba justo en el móvil. Ahora son botones desplegables y
  la llamada se ve en todos los tamaños.
- **El parallax del rediseño estaba congelado en toda la web**: `overflow: hidden`
  en `.fc-manchas`, `.parallax`, `.contacto` e `.ideas` convertía cada sección en
  contenedor de scroll, y las animaciones con `view()` la tomaban a ella (que no
  se mueve) en vez de la página. Ahora es `overflow: clip`. Al activarse, en la
  portada «Comunidad» tapaba una cara: las piezas del collage comparten una sola
  línea de tiempo (`view-timeline: --hero-collage`) y entre 1025 y 1366px el
  collage deja margen a la derecha para que el lema y «Oportunidades» no se
  corten. Las apariciones (`data-aos`) ya no funden la opacidad, solo se
  desplazan, para que ningún texto baje de 7:1 a mitad de entrada, y se
  desactivan en pantallas de 500px de alto o menos.
- **Carrusel de valores**: alto estable al rotar (todas las tarjetas en la misma
  celda), puntos de 44px con contraste de 3:1 repartidos 11, 6 + 5 o 4 + 4 + 3
  según el ancho, sin quedar bajo el botón «Volver arriba».
- **Una regla `.text-left` de AboutPage.css** pintaba de blanco, con relleno, el
  `text-left` de Tailwind en cualquier página visitada después, como las tablas
  del panel.
- **El vídeo de la página nunca se indexó en Google**: no tenía miniatura, ni
  título visible, ni datos estructurados, y el HTML servido no decía nada de él.
  Ahora lleva `poster`, título y descripción visibles, un `VideoObject` que el
  prerender escribe en el HTML servido (campo nuevo `jsonLd` en `RutaMeta`) y una
  entrada `<video:video>` en el sitemap. Los datos salen de una sola fuente,
  `src/features/About/videoComunidad.ts`. Aun así, Google indexa sobre todo
  vídeos de páginas dedicadas a ellos; en esta página el vídeo es complementario,
  así que la indexación no está garantizada. La versión de YouTube se enlaza,
  no se incrusta, para no cargar cookies de terceros.

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
- **El desplegable del avatar se salía de la pantalla**: sus opciones llevaban la
  clase `nav-link`, que a partir de 1200px va a 1.5rem con `padding: 10px 20px` —
  tipografía de rótulo de cabecera aplicada a una lista de opciones. Con "Panel de
  administración" dentro, el menú se estiraba hasta el borde. Ahora tienen clase
  propia y el desplegable mide lo que su opción más larga. `.nav-link` no se toca:
  los enlaces de la barra siguen igual.
- **El texto de los enlaces del menú salía naranja y a 1.5rem**: iba envuelto en
  `<span>`, y `index.css` da a ese elemento el naranja de marca en negrita — es el
  destacado que usa toda la web para resaltar palabras. La regla se queda como
  está; el menú neutraliza su efecto dentro de sus propios límites con una clase,
  sin `!important` y sin alterar nada de fuera.

#### Añadido
- **`CollapsibleSidebar`, menú lateral contraíble compartido** por el panel y la
  página de bienvenida (client#59). Cómo se comporta lo decide **el ancho
  disponible, no la pantalla**: por encima de 1024px convive con el contenido y se
  contrae a una franja de iconos, para seguir viendo dónde se está; por debajo se
  superpone con capa oscura. Antes esto era una prop `variant` que elegía cada
  pantalla, y por eso los dos menús de la web se comportaban distinto en el mismo
  ancho. Lleva `aria-expanded` y `aria-controls`, `aria-label` por estado,
  preferencia recordada en `localStorage`, `prefers-reduced-motion` (WCAG 2.3.3,
  AAA) y foco visible en naranja porque el morado global no se distingue sobre el
  morado del menú. Solo cuando tapa el contenido añade semántica de diálogo
  —`aria-modal`, foco retenido y `Escape`—, reutilizando el contrato ya escrito en
  `StatusModal`. Va `sticky`: estas páginas son largas y en el flujo se perdía al
  bajar.
- **El saludo, el emoji y la frase motivacional salen del menú de bienvenida** a
  una banda sobre el contenido. No son navegación, y eran justamente lo que
  obligaba al menú a medir 20rem y a estar siempre abierto: sacarlos es lo que le
  permite estrecharse. Los seis enlaces llevan ahora icono, así que la franja sigue
  diciendo dónde estás.
- **El menú del panel deja de ocupar un cuarto de la pantalla**: `w-1/4` y `w-3/4`
  fijaban el ancho sin una sola media query, así que las tablas del CRM y de
  usuarias cedían ese espacio aunque no se estuviera navegando. Al contraer el
  menú, el área de trabajo lo recupera.
- **Contraste medido en lo nuevo**: enlaces del menú y saludo 8.16:1, frase
  motivacional 12.9:1, ambos por encima del 7:1 de AAA. La frase deja de ir sobre
  la imagen `bg2`, porque sobre una foto el contraste no se puede garantizar.
- Destinos táctiles de 48px en el selector de estado de ánimo, que antes eran
  botones pequeños en una rejilla fija de cuatro columnas.
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
