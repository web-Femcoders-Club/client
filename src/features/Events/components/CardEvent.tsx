import React from 'react';
import imgEvents from '/imgEvents.png';
import iconDate from '/iconDate.png';
import iconLocation from '/iconLocation.png';


interface CardEventProps {
  title: string;
  image: string;
  date: string;
  location: string;
  description: string;
  eventUrl: string;
}

const CardEvent: React.FC<CardEventProps> = ({ title, image, date, location, description, eventUrl }) => {
  return (
    <div className="event-card-custom">
      <div className="event-flip-card-inner-custom">
        <div className="event-flip-card-front-custom">
          <h2 className="event-card-title-custom">{title}</h2>
          <img className="event-card-image-custom" src={image || imgEvents} alt={title} />
        </div>
        <div className="event-flip-card-back-custom">
          <div className="event-card-body-custom">
            <div className="flex items-center gap-2 mb-2">
              <img src={iconDate} alt="Icon date" className="opacity-70 h-4 icon-orange" />
              <p className="text-bodyText text-contrast/80">{date}</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={iconLocation} alt="Icon location" className="opacity-70 h-4 icon-orange" />
              <p className="text-bodyText text-contrast/80">{location}</p>
            </div>
            <p className="text-bodyText text-contrast">{description}</p>
            <a href={eventUrl} target="_blank" rel="noopener noreferrer">
              <button className="tertiary-button">Adquiere tu entrada</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;



