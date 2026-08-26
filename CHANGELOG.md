# Changelog

Cambios notables del frontend de FemCoders Club.
Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [No publicado]

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

### Cambiado
- **Export CSV/PDF del CRM** vía `fetch` con header `Authorization` (descarga por
  Blob) en vez de token en la query string — necesario desde que `/admin/*` exige
  Bearer token. Manejo de error con aviso a la usuaria.
- El saludo del panel usa el nombre de la sesión en vez de estar hardcodeado.

### Eliminado
- Ruta duplicada `/admin/comments` en el router (ya existe anidada bajo `/admin/*`,
  ahora protegida por el guard).
