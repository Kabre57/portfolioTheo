import React, { useEffect, useState } from "react";

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / windowHeight) * 100;

    setIsScrolling(progress > 0);
    setScrollProgress(progress);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getStrokeDashoffset = () => {
    const totalLength = 307.919; // Longueur totale du chemin
    return totalLength - (totalLength * (scrollProgress / 100));
  };

  return (
    <div className={`prgoress_indicator ${isScrolling ? "active-progress" : ""}`} onClick={scrollToTop}>
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            transition: "stroke-dashoffset 10ms linear",
            strokeDasharray: "307.919",
            strokeDashoffset: getStrokeDashoffset(),
          }}
        ></path>
      </svg>
    </div>
  );
}

export default ScrollProgress;