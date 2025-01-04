import React from "react";

interface InspirationGiftCardProps {
  giftDesc: string;
  giftBtnTxt: string;
  giftImg: string;
}

const InspirationGiftCard: React.FC<InspirationGiftCardProps> = ({
  giftDesc,
  giftBtnTxt,
  giftImg,
}) => {
  return (
    <div className="gift-card-container">
      <div className="gift-card-desc">
        <h1>{giftDesc}</h1>
        <button className="gift-card-btn">{giftBtnTxt}</button>
      </div>
      <div className="gift-card-image">
        <img src={giftImg} />
      </div>
    </div>
  );
};

export default InspirationGiftCard;
