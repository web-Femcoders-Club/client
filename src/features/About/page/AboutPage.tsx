import React from 'react';

import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <>
      <section className="banner">
        <div className="banner-quienes-somos">
          <h1>Comunidad de mujeres desarrolladoras</h1>
          <p>
            El objetivo principal de <strong>femCoders Club</strong> es cerrar la brecha de género en el ámbito digital y ser un referente que promueva la inclusión femenina en el mundo tecnológico. Somos un grupo de mujeres apasionadas por la tecnología que trabajamos para fomentar la participación activa de las mujeres en el sector de TI.
          </p>
        </div>
      </section>
      <section className="parallax bg1 full-height">
        <div className="container-quienes-somos">
          <p className="description text-left">
            Nuestra misión es crear un espacio seguro donde podamos reunirnos y colaborar para crecer juntas. Para lograrlo, organizamos actividades que visibilizan a las mujeres programadoras y promovemos su desarrollo profesional. A través de diálogos abiertos y respetuosos, buscamos derribar barreras y estereotipos, empoderando a todas las mujeres para prosperar en sus carreras tecnológicas. Mediante eventos, talleres y recursos, trabajamos unidas para generar un impacto duradero en la industria y en la vida de nuestras miembros.
          </p>
          <p className="description text-right">
            En <span>FemCoders Club </span>nos enfocamos en impulsar la inclusión, equidad y visibilidad de las mujeres en el sector de TI. Creemos en la diversidad y en la fuerza colectiva para superar obstáculos y lograr un impacto positivo en la industria tecnológica. Promovemos la colaboración y el apoyo mutuo, ofreciendo una plataforma donde las mujeres pueden compartir sus conocimientos, experiencias y recursos. <strong>Juntas, estamos construyendo un futuro más inclusivo y equitativo en el mundo de la tecnología.</strong>
          </p>
          
        </div>
        
      </section>
      <section className="parallax bg2 full-height"></section>
      <section className="parallax bg3 full-height"></section>
      <section className="parallax bg4 full-height"></section>
    </>
  );
};

export default AboutPage;



