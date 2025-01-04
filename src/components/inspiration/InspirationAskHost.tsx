import React from "react";

interface InspirationAskHostProps {
  askImage: string;
  askDesc: string;
  askBtnTxt: string;
}

const InspirationAskHost: React.FC<InspirationAskHostProps> = ({
  askImage,
  askDesc,
  askBtnTxt,
}) => {
  return (
    <div className="ask-container">
      <div className="ask-image">
        <img src={askImage} alt="ask image" />
        <div className="ask-desc">
          <h1>{askDesc}</h1>
          <button>{askBtnTxt}</button>
        </div>
      </div>
    </div>
  );
};

export default InspirationAskHost;
