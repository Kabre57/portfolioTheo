import React from "react";
import './ScrollIndicator.css'; // Importez un fichier CSS pour les styles

function ScrollIndicator() {
  return (
    <>
      {/*==================================================*/}
      {/* Start Toptech Scroll Up */}
      {/*==================================================*/}
      <div className="progress_indicator active-progress">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "212.78",
              stroke: "#4caf50", // Couleur de la progression
              fill: "none",
              strokeWidth: "2"
            }}
          ></path>
        </svg>
      </div>
      {/*==================================================*/}
      {/* End Toptech Scroll Up */}
      {/*==================================================*/}
    </>
  );
}

export default ScrollIndicator;