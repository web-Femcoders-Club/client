import { Link } from 'react-router-dom';

import './Footer.css';
import OptimizedImage from '../OptimizedImage';

const SlackButton = () => {
  return (
    <div>
      <Link to="https://communityinviter.com/apps/femcodersclub/femcoders-club" className="slack-button">
        <OptimizedImage
          src="/slack.jpg"
          alt="Slack Logo"
          loading="eager"
        />
        <span> Unirme al Slack </span>
      </Link>
    </div>
  );
};

export default SlackButton;

