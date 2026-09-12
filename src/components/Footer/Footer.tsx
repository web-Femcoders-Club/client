import { BsInstagram, BsLinkedin, BsSpotify, BsYoutube, BsGithub, BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import ApoyanosButton from "./ApoyanosButton";
import SlackButton from "./SlackButton";

import "./Footer.css";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import OptimizedImage from "../OptimizedImage";

const FccFooter = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
          <div className="footer-logo">
  {/*
    El nombre accesible de un enlace tiene que decir a dónde lleva, no qué se ve
    en él: "FemCoders Club Logo" describía la imagen. Va en el `alt` y no en un
    `title` aparte porque los dos juntos se anuncian dos veces seguidas.

    Y era un `<a href="/">`, que recarga la aplicación entera desde cero en vez
    de navegar: el resto del sitio usa `Link`.
  */}
  <Link to="/">
    <OptimizedImage
      src="/assets/negativeLogo.webp"
      alt="FemCoders Club, ir a la página de inicio"
      loading="eager"
      className="footer-logo-image"
    />
  </Link>
</div>
          </div>
          <div className="footer-social">
            <p>Síguenos en:</p>
            <div className="social-icons">
              <a
                href="https://open.spotify.com/user/31wgl44unbqdv6nh4igsgw5pp6t4?si=29d0152b29404e44"
                className="icon"
                aria-label="Spotify"
              >
                <BsSpotify />
              </a>
              <a
                href="https://www.instagram.com/femcoders_club/"
                className="icon"
                aria-label="Instagram"
              >
                <BsInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/fem-coders-club/"
                className="icon"
                aria-label="LinkedIn"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://www.youtube.com/@FemcodersClub"
                className="icon"
                aria-label="YouTube"
              >
                <BsYoutube />
              </a>
              <a
                href="https://github.com/femcodersclub"
                className="icon"
                aria-label="GitHub"
              >
                <BsGithub />
              </a>
              <a
              href="https://x.com/FemCodersClub"
              className="icon"
              aria-label="X"
              > <BsTwitterX /></a>
            </div>
            <p>O también:</p>
            <SlackButton />
          </div>
          <div className="footer-support">
            {/*
              Eran `<a href="#">`: se anunciaban como enlaces, prometían llevar a
              otro sitio y, al no cancelar el salto del ancla, además subían la
              página al principio y dejaban un `#` colgando en la URL. No llevan
              a ninguna parte —abren una ventana sobre esta misma página—, que es
              exactamente lo que hace un botón.
            */}
            <div className="footer-policies">
              <button
                type="button"
                onClick={() => openModal("cookiePolicy")}
                className="cookie-link"
              >
                Política de Cookies
              </button>
              <button
                type="button"
                onClick={() => openModal("privacyPolicy")}
                className="cookie-link"
              >
                Política de Privacidad
              </button>
              <button
                type="button"
                onClick={() => openModal("legalNotice")}
                className="cookie-link"
              >
                Aviso Legal
              </button>
              <button
                type="button"
                onClick={() => openModal("faq")}
                className="cookie-link"
              >
                Preguntas Frecuentes
              </button>
            </div>
            <ApoyanosButton />
          </div>
        </div>
        <div className="footer-bottom">
          <p>©2024 FemCoders Club. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default FccFooter;

