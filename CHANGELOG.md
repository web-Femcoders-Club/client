# Changelog

Cambios notables del frontend de FemCoders Club.
Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [No publicado]

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
