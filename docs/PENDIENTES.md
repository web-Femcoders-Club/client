# Pendientes técnicos

**La deuda técnica viva se registra en las
[issues del repositorio](https://github.com/web-Femcoders-Club/client/issues),
no aquí.**

Este archivo nació antes que las issues y llegó a tener ocho entradas. Todas
menos una se han migrado o resuelto:

| Entrada | Dónde está ahora |
| --- | --- |
| Miniaturas al compartir en redes | issue #38 |
| Botones de Instagram y TikTok inertes | issue #39 |
| JSON-LD del post de Flexbox con logo inexistente | issue #39 |
| Componente `<ArticleSchema>` compartido | issue #39 |
| Vulnerabilidades de Dependabot | issue #7 |
| Qué mira cada buscador del panel | resuelto (server#14, client#20) |
| El crosscheck devolvía `data` y `users` | resuelto (server#27) |

Queda la de abajo porque no es trabajo pendiente, sino una comprobación que
nadie ha hecho todavía. En cuanto se haga, este archivo desaparece.

---

## Verificación visual del post de June

**Estado:** abierto
**Impacto:** bajo
**Detectado:** 9 de julio de 2026

El post `ColaboracionJune.tsx` se subió sin haberse visto renderizado en el navegador.
Comprobado que pasa `tsc` y `eslint`, nada más.

Dos puntos concretos a revisar con `npm run dev`:

- **La foto de Silvina** (`Silvina-Lucero-QA-funcional.png`) es vertical, 1086x1448.
  El avatar la recorta a un cuadrado centrado con `object-fit: cover`, así que puede
  cortarle la cara si no está centrada verticalmente. Se arregla con
  `object-position: top` o recortando la imagen cuadrada, como las demás.
- **La sección "mapas sin mapas"** introduce el primer `<h3>` dentro de un
  `.highlight-box`. No se le dio estilo propio a propósito, para no alterar los
  62 `<h3>` que ya existen en otros posts. Confirmar que hereda un estilo legible.
