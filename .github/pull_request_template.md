<!--
  IMPORTANTE — para que la issue se cierre sola al mergear, la palabra clave
  debe ir EN INGLÉS. GitHub no reconoce "Cierra #41" ni "Resuelve #41".

  Funcionan:  Closes #41   Fixes #41   Resolves #41
  Una por issue: "Closes #41, closes #42" (no vale "Closes #41 y #42").

  Si el PR solo hace PARTE de la issue, no uses la palabra clave: escribe
  "Parte de #41" y comenta en la issue qué queda pendiente.
-->

Closes #

## Qué problema resuelve

<!-- Qué estaba mal y por qué importaba. Si tocaba datos personales o
     seguridad, dilo aquí. -->

## Qué cambia

<!-- Los cambios y, sobre todo, POR QUÉ se hicieron así. Las decisiones de
     diseño se olvidan; el código solo cuenta el qué. -->

## Verificación

<!-- Qué se ejecutó y qué salió. No "los tests pasan", sino cuáles y con qué
     resultado. Si un test nuevo cubre un fallo, di que se comprobó que falla
     al revertir el arreglo: un test que nunca ha fallado no está probado. -->

- [ ] Tipos (`npx tsc --noEmit`)
- [ ] Lint sin errores nuevos (`npm run lint`)
- [ ] Revisado en el navegador: móvil vertical y horizontal, y zoom al 200%

## Qué queda fuera

<!-- Lo que NO entra y por qué. Dentro de seis meses, "por qué no hicimos X"
     merece tener respuesta escrita en lugar de reconstruirse. -->

## Accesibilidad

<!-- Borra esta sección si el PR no toca la interfaz. -->

- [ ] Foco visible en todo lo interactivo
- [ ] Contraste AAA (7:1); si se baja a AA, justificado aquí
- [ ] Contenido ancho (tablas, código) con su propio scroll horizontal — el
      body de la página nunca scrollea en horizontal

## Datos personales

<!-- Borra esta sección si el PR no toca datos de personas. -->

- [ ] No se añaden datos personales a logs, exports ni emails
- [ ] Si se recoge un dato nuevo: finalidad y plazo documentados, y la política
      de privacidad actualizada **antes** de empezar a tratarlo
