import { BsInstagram, BsLinkedin, BsSpotify, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ApoyanosButton from './ApoyanosButton';
import SlackButton from './SlackButton';
import PrivacyPolicyModal from './Modals/Privacidad';
import CookiePolicyModal from './Modals/Cookies';
import FemCodersClubLogo from '../../../public/negativeLogo.png';
import './Footer.css';

const FccFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <Link to="/">
              <img src={FemCodersClubLogo} alt="Fem Coders Club Logo" />
            </Link>
          </div>
          <div className="footer-social">
            <p>Síguenos en:</p>
            <div className="social-icons">
              <a href="https://open.spotify.com/user/31wgl44unbqdv6nh4igsgw5pp6t4?si=29d0152b29404e44" className="icon" aria-label="Spotify"><BsSpotify /></a>
              <a href="https://www.instagram.com/femcoders_club/" className="icon" aria-label="Instagram"><BsInstagram /></a>
              <a href="https://www.linkedin.com/company/fem-coders-club/" className="icon" aria-label="LinkedIn"><BsLinkedin /></a>
              <a href="https://www.youtube.com/@FemcodersClub" className="icon" aria-label="YouTube"><BsYoutube /></a>
            </div>
            <p>O también:</p>
            <SlackButton />
          </div>
          <div className="footer-support">
            <div className="footer-policies">
              <CookiePolicyModal />
              <PrivacyPolicyModal />
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
}

export default FccFooter;

