# Imágenes generadas con IA — cómo marcarlas

El AI Act (Reglamento UE 2024/1689, art. 50) exige transparencia sobre el
contenido generado o manipulado por IA. En la web se marca con un distintivo
visible junto a la propia imagen.

## Qué cuenta como imagen generada con IA

| Sí lleva distintivo | No lleva distintivo |
|---|---|
| Imagen creada con un generador (Midjourney, DALL·E, Magic Media de Canva, Gemini…) | Diseño compuesto a mano en Canva o Figma con plantillas, stock y texto |
| Imagen retocada con IA generativa (rellenar, expandir o sustituir elementos) | Capturas de pantalla reales (PageSpeed, DevTools…) |
| | Fotos de eventos, retratos y logos |

Usar una herramienta de diseño no convierte una imagen en generada por IA: lo
determinante es si el contenido lo produjo un modelo generativo.

## Cómo marcar una imagen en un post

Los posts pintan las imágenes con `<PostImage>`
(`src/features/Blog/components/PostImage.tsx`). Basta con añadir la prop
`aiGenerated`:

```tsx
import PostImage from "../../../components/PostImage";

<PostImage
  src="/assets/javascript/event-loop-javascript.webp"
  alt="Diagrama del event loop de JavaScript: pila de llamadas, cola de tareas y bucle de eventos"
  aiGenerated
/>
```

Esto renderiza un `<figure>` con su `<figcaption>` y el distintivo
«Imagen generada con IA». Sin la prop, el marcado es el mismo que tenían los
posts hasta ahora.

Con pie de foto propio:

```tsx
<PostImage src="…" alt="…" aiGenerated caption="Esquema simplificado del proceso." />
```

## El texto alternativo

El `alt` describe **lo que comunica la imagen**, no su origen: el distintivo ya
informa de que es generada por IA, y quien usa lector de pantalla lo escucha
igual porque es texto real, no un pseudo-elemento de CSS.

## Migración pendiente

Los posts que aún usan `<div className="post-image-container">` con `<img>`
escrito a mano siguen funcionando. Se migran a `<PostImage>` a medida que se
tocan, o de golpe cuando se decida.

Inventario y seguimiento: issue #17 del repositorio client.
