import React from "react";
import { Helmet } from "react-helmet";
import LoginForm from "../components/LoginForm";
import FraseAnimada from "../components/FraseAnimada";
import "./Acceso.css";

const PALABRAS = ["comunidad", "mentoría", "liderazgo", "diversidad", "oportunidades"] as const;

/*
 * /login: a la izquierda el saludo y la frase con la palabra escrita a mano,
 * a la derecha la tarjeta del formulario con la capa en degradado (como
 * /contacto). Layout ya pone el <main>: aquí, una sección.
 */
const LoginPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Iniciar Sesión - FemCoders Club</title>
        <meta name="description" content="Accede a tu cuenta de FemCoders Club para participar en nuestra comunidad tech." />
      </Helmet>
      <section className="acceso bg1 fc-manchas" aria-labelledby="acceso-titulo">
        <div className="acceso__rejilla">
          <header className="acceso__cabecera">
            <p className="fc-antetitulo fc-antetitulo--naranja">Tu cuenta</p>
            <h1 className="acceso__titulo" id="acceso-titulo">
              Qué alegría <span className="fc-rotulador">verte</span> de nuevo
            </h1>
            <FraseAnimada inicio="Juntas crecemos en" palabras={PALABRAS} />
            <p className="acceso__entradilla">
              Entra en tu espacio de FemCoders Club para seguir los eventos,
              los recursos y las mentorías de la comunidad.
            </p>
          </header>

          <div className="acceso__formulario">
            <div className="fc-capa" aria-hidden="true" />
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
