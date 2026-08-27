import './Footer.css';
import OptimizedImage from '../OptimizedImage';
import { SLACK_INVITE_URL } from '../../utils/constants';

const SlackButton = () => {
  return (
    <div>
      {/* Enlace externo: <a>, no <Link> de react-router (lo trataría como ruta interna) */}
      <a
        href={SLACK_INVITE_URL}
        className="slack-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <OptimizedImage
          src="/slack.jpg"
          alt="Slack Logo"
          loading="eager"
        />
        <span> Unirme al Slack </span>
      </a>
    </div>
  );
};

export default SlackButton;
