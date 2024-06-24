import { Link } from 'react-router-dom';
import Slack from '../../../public/slack.jpg'; 
import './Footer.css';

const SlackButton = () => {
  return (
    <div>
      <Link to="https://communityinviter.com/apps/femcodersclub/femcoders-club" className="slack-button">
        <img src={Slack} alt="Slack Logo" />
        <span> Unirme al Slack </span>
      </Link>
    </div>
  );
};

export default SlackButton;

