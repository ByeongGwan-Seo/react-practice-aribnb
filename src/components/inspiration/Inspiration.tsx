import React from "react";
import InspirationCitycard from "./InspirationCitycard";
import InspirationExpCard from "./InspirationExpCard";
import InspirationGiftCard from "./InspirationGiftCard";

const Inspiration: React.FC = () => {
  return (
    <>
      <div className="inspiration-container">
        <h1 className="inspiration-title">Inspiration for your next trip</h1>
        <div className="inspiration-card-row">
          <InspirationCitycard
            cityName="Nashville"
            cityImage="/images/inspiration/Rectangle 1.png"
            cityDesc="53"
            backgroundColor="#CC2D4A"
          />
          <InspirationCitycard
            cityName="South Haven"
            cityImage="/images/inspiration/Rectangle 2.png"
            cityDesc="168"
            backgroundColor="#BC1A6E"
          />
          <InspirationCitycard
            cityName="Stanton"
            cityImage="/images/inspiration/Rectangle 3.png"
            cityDesc="192"
            backgroundColor="#DE3151"
          />
          <InspirationCitycard
            cityName="New Buffalo"
            cityImage="/images/inspiration/Rectangle 4.png"
            cityDesc="130"
            backgroundColor="#D93B30"
          />
        </div>

        <h1 className="inspiration-title">Discover Airbnb Experiences</h1>
        <div className="inspiration-card-row">
          <InspirationExpCard
            expDesc="Things to do on your trip"
            expButtonTxt="Experiences"
            expImage="/images/inspiration/exp-image-1.jpeg"
          />
          <InspirationExpCard
            expDesc="Things to do from home"
            expButtonTxt="Online Experiences"
            expImage="/images/inspiration/exp-image-2.jpeg"
          />
        </div>
        <InspirationGiftCard
          giftDesc="Shop Airbnb gift cards"
          giftBtnTxt="Learn more"
          giftImg="/images/inspiration/giftcards.png"
        />
      </div>
    </>
  );
};

export default Inspiration;
