import React from "react";

const BnbnavImage: React.FC = () => {
  return (
    <div className="home-image-container">
      <img src="/images/house-image.jpeg" alt="House" />
      <div className="overlay-content">
        <text className="overlay-text">Not sure where to go? Perfect.</text>
        <div className="overlay-button">
          <span className="gradient-text">I'm flexible</span>
        </div>
      </div>
    </div>
  );
};

export default BnbnavImage;
