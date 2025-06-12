// import React, { useState, useRef } from "react";
// import OptimizedImage from "../../../components/OptimizedImage";

// interface CardEventProps {
//   title: string;
//   image: string;
//   date: string;
//   location: string;
//   description: string;
//   eventUrl: string;
//   start: {
//     local: string;
//   };
// }

// const CardEvent: React.FC<CardEventProps> = ({
//   title,
//   image,
//   date,
//   location,
//   description,
//   eventUrl,
//   start,
// }) => {
//   const isPastEvent = new Date(start.local) < new Date();
//   const defaultImage = "/apoyomujeres.png";
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleFrontKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//       setIsFlipped(true);
//     }
//   };
//   const handleMouseEnter = () => {
//     setIsFlipped(true);
//   };

//   const handleBackButtonClick = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setIsFlipped(false);
//   };

//   const handleBackKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Escape") {
//       e.preventDefault();
//       setIsFlipped(false);
//     }
//   };

//   return (
//     <div
//       className="event-card-custom"
//       ref={cardRef}
//       onKeyDown={isFlipped ? handleBackKeyDown : undefined}
//     >
//       <div
//         className={`event-flip-card-inner-custom ${isFlipped ? "flipped" : ""}`}
//         style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)" }}
//       >
//         <div
//           className="event-flip-card-front-custom"
//           onMouseEnter={handleMouseEnter}
//           onKeyDown={handleFrontKeyDown}
//           tabIndex={isFlipped ? -1 : 0}
//           aria-label={`Evento: ${title}. Presiona Enter para ver detalles`}
//           role="button"
//         >
//           <h2 className="event-card-title-custom">{title}</h2>
//           <OptimizedImage
//             src={image || defaultImage}
//             alt={title}
//             className="event-card-image-custom"
//             loading="lazy"
//           />
//         </div>

//         <div className="event-flip-card-back-custom">
//           <div className="event-card-body-custom">
//             <div className="flex items-center gap-2 mb-2">
//               <OptimizedImage
//                 src="/iconDate.png"
//                 alt="Fecha del evento"
//                 className="opacity-70 h-4 icon-orange"
//                 loading="eager"
//               />
//               <p className="text-bodyText text-contrast/80">{date}</p>
//             </div>
//             <div className="flex items-center gap-2">
//               <OptimizedImage
//                 src="/iconLocation.png"
//                 alt="Ubicación del evento"
//                 className="opacity-70 h-4 icon-orange"
//                 loading="eager"
//               />
//               <p className="text-bodyText text-contrast/80">{location}</p>
//             </div>
//             <p className="text-bodyText text-contrast">{description}</p>
//             {!isPastEvent && (
//               <a href={eventUrl} target="_blank" rel="noopener noreferrer">
//                 <button className="tertiary-button">Adquiere tu entrada</button>
//               </a>
//             )}

//             <button
//               className="flip-icon-button back"
//               onClick={handleBackButtonClick}
//               aria-label="Volver a la imagen del evento"
//               title="Volver a la imagen del evento"
//               tabIndex={isFlipped ? 0 : -1}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle cx="12" cy="12" r="10"></circle>
//                 <polyline points="12 8 8 12 12 16"></polyline>
//                 <line x1="16" y1="12" x2="8" y2="12"></line>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardEvent;


import React, { useState, useRef } from "react";
import OptimizedImage from "../../../components/OptimizedImage";

interface CardEventProps {
  title: string;
  image: string;
  date: string;
  location: string;
  description: string;
  eventUrl: string;
  start: {
    local: string;
  };
}

const CardEvent: React.FC<CardEventProps> = ({
  title,
  image,
  date,
  location,
  description,
  eventUrl,
  start,
}) => {
  const isPastEvent = new Date(start.local) < new Date();
  const defaultImage = "/apoyomujeres.png";
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  // Use eventUrl to avoid TypeScript warning (keeping for backward compatibility)
  void eventUrl;

  const handleFrontKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsFlipped(true);
    }
  };
  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleBackButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
  };

  const handleBackKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setIsFlipped(false);
    }
  };

  return (
    <div
      className="event-card-custom"
      ref={cardRef}
      onKeyDown={isFlipped ? handleBackKeyDown : undefined}
    >
      <div
        className={`event-flip-card-inner-custom ${isFlipped ? "flipped" : ""}`}
        style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)" }}
      >
        <div
          className="event-flip-card-front-custom"
          onMouseEnter={handleMouseEnter}
          onKeyDown={handleFrontKeyDown}
          tabIndex={isFlipped ? -1 : 0}
          aria-label={`Evento: ${title}. Presiona Enter para ver detalles`}
          role="button"
        >
          <h2 className="event-card-title-custom">{title}</h2>
          <OptimizedImage
            src={image || defaultImage}
            alt={title}
            className="event-card-image-custom"
            loading="lazy"
          />
        </div>

        <div className="event-flip-card-back-custom">
          <div className="event-card-body-custom">
            <div className="flex items-center gap-2 mb-2">
              <OptimizedImage
                src="/iconDate.png"
                alt="Fecha del evento"
                className="opacity-70 h-4 icon-orange"
                loading="eager"
              />
              <p className="text-bodyText text-contrast/80">{date}</p>
            </div>
            <div className="flex items-center gap-2">
              <OptimizedImage
                src="/iconLocation.png"
                alt="Ubicación del evento"
                className="opacity-70 h-4 icon-orange"
                loading="eager"
              />
              <p className="text-bodyText text-contrast/80">{location || "Online"}</p>
            </div>
            <p className="text-bodyText text-contrast">{description}</p>
            {!isPastEvent && (
              <a 
                href="mailto:info@femcodersclub.com?subject=Preguntas para Nadia" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="tertiary-button">Haz tus preguntas</button>
              </a>
            )}

            <button
              className="flip-icon-button back"
              onClick={handleBackButtonClick}
              aria-label="Volver a la imagen del evento"
              title="Volver a la imagen del evento"
              tabIndex={isFlipped ? 0 : -1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 8 8 12 12 16"></polyline>
                <line x1="16" y1="12" x2="8" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;