import React from "react";

interface InspirationCitycardProps {
  cityName: string;
  cityImage: string;
  cityDesc: string;
  backgroundColor: string;
}

const InspirationCitycard: React.FC<InspirationCitycardProps> = ({
  cityName,
  cityImage,
  cityDesc,
  backgroundColor,
}) => {
  return (
    <div className="city-card-container">
      <div className="city-card-image">
        <img src={cityImage} />
      </div>
      <div
        className="city-card-desc"
        style={{ backgroundColor: backgroundColor }}
      >
        <h2 className="city-name">{cityName}</h2>
        <p className="city-desc">{cityDesc} miles away</p>
      </div>
    </div>
  );
};

export default InspirationCitycard;
