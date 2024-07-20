import { BsInstagram, BsLinkedin, BsSpotify, BsYoutube, BsGithub } from "react-icons/bs";
import ApoyanosButton from "./ApoyanosButton";
import SlackButton from "./SlackButton";
import FemCodersClubLogo from "/negativeLogo.png";
import "./Footer.css";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

const FccFooter = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <a href="/">
              <img src={FemCodersClubLogo} alt="Fem Coders Club Logo" />
            </a>
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
            </div>
            <p>O también:</p>
            <SlackButton />
          </div>
          <div className="footer-support">
            <div className="footer-policies">
              <a
                href="#"
                onClick={() => openModal("cookiePolicy")}
                className="cookie-link"
              >
                Política de Cookies
              </a>
              <a
                href="#"
                onClick={() => openModal("privacyPolicy")}
                className="cookie-link"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                onClick={() => openModal("faq")}
                className="cookie-link"
              >
                Preguntas Frecuentes
              </a>
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

