import React, { useEffect, useState } from "react";

function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Afficher l'indicateur si l'utilisateur a défilé vers le bas
    setIsVisible(scrollY > windowHeight);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`prgoress_indicator ${isVisible ? 'active-progress' : ''}`} 
      onClick={scrollToTop} // Ajoutez cet événement
    >
      
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            transition: "stroke-dashoffset 10ms linear 0s",
            strokeDasharray: "307.919, 307.919",
            strokeDashoffset: "212.78", // Ajustez cette valeur selon la progression
            stroke: "#0c5adb", // Couleur de votre choix
            fill: "none",
            strokeWidth: "2"
          }}
        ></path>
      </svg>
    </div>
  );
}

export default ScrollIndicator;