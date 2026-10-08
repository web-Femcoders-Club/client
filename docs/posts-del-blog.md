# Cómo escribir un post del blog

Todos los posts usan la misma plantilla y las mismas piezas. Un post nuevo no
lleva CSS propio, ni Tailwind, ni `PostStyles.css`: si algo no se puede contar
con las piezas de abajo, se añade una pieza nueva a `PiezasPost.tsx` (con sus
estilos en `Post.css`) para que la usen también los demás posts.

Copia la estructura de un post ya migrado:
`src/features/Blog/posts/recursos/css/IntroduccionCss.tsx` es el más corto.

## Esqueleto

```tsx
import React from "react";
import { Helmet } from "react-helmet";
import PlantillaPost from "../../../components/post/PlantillaPost";
import { CodigoPost, SeccionPost } from "../../../components/post/PiezasPost";

const MiPost: React.FC = () => (
  <>
    <Helmet>{/* title, description, canonical, og:*, article:* */}</Helmet>

    <PlantillaPost
      ruta="/recursos/css/mi-post"          // la misma de Router.tsx y del canonical
      titulo="Título del post"
      autora={{ nombre: "Irina Ichim", rol: "Cofundadora de FemCoders Club" }}
      idComentarios={99}                    // id del post en el backend de comentarios
      entradilla={<p>Uno o dos párrafos que presentan el post.</p>}
    >
      <SeccionPost titulo="Primer apartado">
        <p>…</p>
      </SeccionPost>
    </PlantillaPost>
  </>
);

export default MiPost;
```

La plantilla ya pinta la portada, las migas, el tema, la fecha, el tiempo de
lectura, compartir, los comentarios y «Sigue aprendiendo». Fecha, tema e
imagen los lee del `<Helmet>` a través del índice: no se repiten en el post.

## Qué pieza usar

| Para…                                         | Pieza                                     |
| --------------------------------------------- | ----------------------------------------- |
| Un apartado con su h2 (dentro, h3 libres)     | `SeccionPost titulo id?`                  |
| Código con botón de copiar                    | `CodigoPost lenguaje`                     |
| Un consejo o un aviso                         | `NotaPost titulo tipo?="consejo"\|"aviso"` |
| Una tabla (con scroll en móvil)               | `TablaPost descripcion`                   |
| Una imagen dentro del texto, con pie          | `ImagenPost src alt pie? generadaConIA?`  |
| El resultado en vivo de un ejemplo de CSS     | `DemoPost` + `.post-demo__caja`           |
| La respuesta plegada de un ejercicio          | `RespuestaPost resumen?`                  |
| Un vídeo propio (.mp4), con versión móvil     | `VideoPost src srcMovil? poster? descripcion` |
| Varias ideas cortas, herramientas, recursos   | `TarjetasPost tarjetas columnas?`         |
| Lo que sí, lo que no, o preguntas             | `ListaMarcadaPost titulo tipo`            |
| Un plan por etapas                            | `PasosPost pasos`                         |

**Imágenes generadas con IA** (AI Act, art. 50): si la portada se creó o se
retocó con un modelo generativo, `portadaConIA` en `PlantillaPost`; el índice
lo lee de ahí y las tarjetas del blog también muestran el distintivo. Dentro
del texto, `generadaConIA` en `ImagenPost`. Un diseño hecho a mano en Canva
no cuenta.

Párrafos, listas, `<code>` dentro de una frase y enlaces van sin clase: los
estiliza la plantilla. Los enlaces a la propia web, con `<Link to>`.

## Publicarlo

1. El componente en `src/features/Blog/posts/noticias/` o `.../recursos/`.
2. La ruta en `src/router/Router.tsx` (`lazy()` y `<Route>`).
3. `pnpm prebuild`: regenera el índice del blog, `sitemap.xml` y `llms.txt`.
   Se commitean tal cual salen.
4. Solo si va en la portada de la web: `newsData` en
   `src/features/Home/page/HomePage.tsx`.

Las listas del blog (portada, Noticias, Recursos) salen del índice: no se
tocan a mano.
