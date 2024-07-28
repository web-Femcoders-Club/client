import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import "../page/PromoterCard.css";

interface PromoterCardProps {
  imageSrc: string;
  name: string;
  role: string;
  description: string;
  linkedin: string;
}

const PromoterCard: React.FC<PromoterCardProps> = ({ imageSrc, name, role, description, linkedin }) => {
  return (
    <div className="card-promotora">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageSrc} alt={`Imagen de ${name}`} />
          <h3>{name}</h3>
        </div>
        <div className="card-back">
          <p>
            <strong>{role}</strong>
          </p>
          <p>{description}</p>
          <p style={{ textAlign: "center", marginTop: "1rem" }}>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${name}`}>
              <FaLinkedin size={24} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoterCard;





