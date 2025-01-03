import React from "react";

interface InspirationExpCardProps {
  expImage: string;
  expDesc: string;
  expButtonTxt: string;
}

const InspirationExpCard: React.FC<InspirationExpCardProps> = ({
  expImage,
  expDesc,
  expButtonTxt,
}) => {
  return (
    <>
      <div className="exp-card-container">
        <div className="exp-card-image">
          <img src={expImage} alt={expDesc} />
          <div className="exp-card-desc">
            <h2 className="exp-desc">{expDesc}</h2>
            <button className="exp-desc-button">{expButtonTxt}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InspirationExpCard;
