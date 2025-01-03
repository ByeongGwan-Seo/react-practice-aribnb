import React from "react";

const BnbnavSearch: React.FC = () => {
  return (
    <div className="home-search-container">
      <div className="home-search-item">
        <text className="home-search-item-primary">Location</text>
        <text className="home-search-item-secondary">Where are you going?</text>
      </div>

      <div className="home-search-divider"></div>

      <div className="home-search-item">
        <text className="home-search-item-primary">Check In</text>
        <text className="home-search-item-secondary">Add Dates</text>
      </div>

      <div className="home-search-divider"></div>

      <div className="home-search-item">
        <text className="home-search-item-primary">Check Out</text>
        <text className="home-search-item-secondary">Add Dates</text>
      </div>

      <div className="home-search-divider"></div>

      <div className="home-search-item">
        <text className="home-search-item-primary">Guests</text>
        <text className="home-search-item-secondary">Add Guests</text>
      </div>

      <div className="home-search-image">
        <img src="/images/search-button.svg" alt="Search Button" />
      </div>
    </div>
  );
};

export default BnbnavSearch;
