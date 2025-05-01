import React, { useState } from "react";
import { FaLinkedin, FaQuoteLeft } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import "../page/PromoterCard.css";
import OptimizedImage from "../../../components/OptimizedImage";

interface PromoterCardProps {
  imageSrc: string;
  name: string;
  role: string;
  description: string;
  linkedin: string;
  specialty?: string;
  contribution?: string;
}

const PromoterCard: React.FC<PromoterCardProps> = ({
  imageSrc,
  name,
  role,
  description,
  linkedin,
  specialty = "",
  contribution = "",
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(true);
  const handleBack = () => setIsFlipped(false);

  return (
    <div className={`promoter-card ${isFlipped ? "is-flipped" : ""}`}>
      <div className="promoter-card-inner">
        <div className="promoter-card-front bg1">
          <div className="promoter-image-container">
            <OptimizedImage
              src={imageSrc}
              alt={`Imagen de ${name}`}
              className="promoter-image"
            />
          </div>
          <h3 className="promoter-name">{name}</h3>
          <p className="promoter-role">
            <MdOutlineWork className="role-icon" aria-hidden="true" />
            {role}
          </p>
          {specialty && <p className="promoter-specialty">{specialty}</p>}

          <button
            className="linkedin-link"
            onClick={handleFlip}
            aria-label={`Ver más información sobre ${name}`}
          >
            Click para más info
          </button>
        </div>

        <div className="promoter-card-back bg1">
          <div className="quote-container">
            <FaQuoteLeft className="quote-icon" aria-hidden="true" />
            <p className="promoter-description">{description}</p>
          </div>

          {contribution && (
            <div className="contribution-block">
              <h4 className="contribution-title">Aportes destacados:</h4>
              <p className="contribution-text">{contribution}</p>
            </div>
          )}

          <div className="promoter-social">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${name}`}
              className="linkedin-link"
              onClick={(e) => e.stopPropagation()}
            >
              <FaLinkedin className="linkedin-icon" />
              <p>Visitar perfil</p>
            </a>
          </div>

          <button
            type="button"
            className="flip-back-button"
            onClick={(e) => {
              e.stopPropagation();
              handleBack();
            }}
            aria-label="Volver a vista principal"
          >
            ← Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoterCard;
