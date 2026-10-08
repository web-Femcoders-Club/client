import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import { POSTS_DEL_BLOG } from "../postsDelBlog";

/*
 * Los quizzes para preparar entrevistas técnicas, destacados junto al título
 * de /blog/recursos. Se reconocen por la ruta (/recursos/<tema>/quiz-…): uno
 * nuevo aparece aquí sin tocar este archivo. Estilos en Blog.css.
 */
const QUIZZES = POSTS_DEL_BLOG.filter((post) => post.ruta.includes("/quiz-"));

/** «Quiz CSS para Entrevistas Técnicas: 30 Preguntas Esenciales» → «30 Preguntas Esenciales». */
const detalle = (titulo: string) => titulo.split(":").slice(1).join(":").trim();

const KitEntrevistas: React.FC = () => {
  if (QUIZZES.length === 0) return null;

  return (
    <aside className="blog-kit" aria-labelledby="blog-kit-titulo">
      <div className="fc-capa" aria-hidden="true" />
      <div className="fc-tarjeta blog-kit__tarjeta">
        <div className="blog-kit__cabecera">
          <div className="fc-disco fc-disco--naranja" aria-hidden="true">
            <ClipboardCheck />
          </div>
          <h2 className="blog-kit__titulo" id="blog-kit-titulo">
            Prepara tu entrevista técnica
          </h2>
        </div>
        <ul className="blog-kit__lista">
          {QUIZZES.map((quiz) => (
            <li key={quiz.ruta}>
              <Link to={quiz.ruta} className="blog-kit__enlace">
                <span className="blog-kit__tema">Quiz de {quiz.tema}</span>
                {/* Sin este espacio el lector oiría «Quiz de CSS30 Preguntas». */}{" "}
                {detalle(quiz.titulo) && (
                  <span className="blog-kit__detalle">{detalle(quiz.titulo)}</span>
                )}
                <ArrowRight aria-hidden="true" className="blog-kit__flecha" />
              </Link>
            </li>
          ))}
        </ul>
        <p className="blog-kit__nota">Tres niveles de dificultad y la explicación de cada respuesta.</p>
      </div>
    </aside>
  );
};

export default KitEntrevistas;
