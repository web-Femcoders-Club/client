import React, { useState, useRef } from "react";
import "./DiffComponent.css";

interface DiffProps {
  image1: string;
  title: string;
  description: string;
  githubLink: string;
}

const DiffComponent: React.FC<DiffProps> = ({
  image1,
  title,
  description,
  githubLink,
}) => {
  const [dividerPosition, setDividerPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    const onMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const container = containerRef.current.getBoundingClientRect();
        const newPosition =
          ((e.clientX - container.left) / container.width) * 100;
        setDividerPosition(Math.max(0, Math.min(100, newPosition)));
      }
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div ref={containerRef} className="diff-container">
      <div className="diff-image">
        <img src={image1} alt="Imagen del proyecto" />
      </div>

      <div className="diff-overlay" style={{ width: `${dividerPosition}%` }}>
        <div className="diff-content">
          <img
            src="/FemCodersClubLogo.png"
            alt="FemCoders Club"
            className="diff-logo"
          />
          <h3 className="diff-title">{title}</h3>
          <p className="diff-description">{description}</p>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="diff-link"
          >
            Ver en GitHub
          </a>
        </div>
      </div>

      <div
        className="diff-divider"
        style={{ left: `${dividerPosition}%` }}
        onMouseDown={handleMouseDown}
      >
        <span className="diff-arrow">⇆</span>
      </div>
    </div>
  );
};

export default DiffComponent;
