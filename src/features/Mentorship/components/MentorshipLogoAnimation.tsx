import React, { useState, useRef } from "react";
import { Pause, Play, Sparkles } from "lucide-react";

interface MentorshipLogoAnimationProps {
  logoSrc: string;
}

const MentorshipLogoAnimation: React.FC<MentorshipLogoAnimationProps> = ({
  logoSrc,
}) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [animationType, setAnimationType] = useState<
    "pulse" | "travel" | "rotate" | "threeD"
  >("pulse");
  const logoRef = useRef<HTMLDivElement>(null);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const cycleAnimationType = () => {
    const animations: Array<"pulse" | "travel" | "rotate" | "threeD"> = [
      "pulse",
      "travel",
      "rotate",
      "threeD",
    ];
    const currentIndex = animations.indexOf(animationType);
    const nextIndex = (currentIndex + 1) % animations.length;
    setAnimationType(animations[nextIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div
        ref={logoRef}
        className={`w-48 h-48 rounded-lg shadow-xl overflow-hidden ${
          isAnimating ? `animate-logo-${animationType}` : ""
        }`}
      >
        <img
          src={logoSrc}
          alt="Mentorship Logo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center space-x-4">
        <details className="relative group">
          <summary
            className="btn btn-circle primary-button btn-sm"
            aria-label={isAnimating ? "Pausar animación" : "Reanudar animación"}
            style={{ listStyle: "none", cursor: "pointer" }}
            onClick={toggleAnimation}
          >
            {isAnimating ? <Pause size={16} /> : <Play size={16} />}
          </summary>
<div
  className={`absolute top-full left-1/2 transform -translate-x-1/2 translate-y-4 text-white text-sm font-medium py-1 px-3 rounded-lg shadow-md transition-opacity duration-300 ${
    isAnimating ? "bg-green-500" : "bg-red-500"
  }`}
  style={{ width: "max-content" }}
  aria-live="polite"
>
  {isAnimating ? "Animación en curso" : "Animación pausada"}
</div>


        </details>

        <details className="relative group">
          <summary
            className="btn btn-circle secondary-button btn-sm"
            aria-label="Cambiar tipo de animación"
            style={{ listStyle: "none", cursor: "pointer" }}
            onClick={cycleAnimationType}
          >
            <Sparkles size={16} />
          </summary>
          <div
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-white text-sm font-medium py-1 px-2 rounded-md shadow-lg"
            style={{ backgroundColor: "#821ad4", width: "max-content" }}
          >
            Cambiar tipo de animación
          </div>
        </details>
      </div>
    </div>
  );
};

export default MentorshipLogoAnimation;
