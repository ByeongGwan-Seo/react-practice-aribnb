import React from "react";

const BnbnavHome: React.FC = () => {
  return (
    <div className="home-nav-container">
      <div className="home-nav-logo">
        <img
          src="/images/logo-white.svg"
          alt="Logo"
          className="logo-image"
          width={102}
          height={32}
        />
      </div>

      <div className="nav-buttons">
        <button className="text-base-regular">Places To Stay</button>
        <button className="text-base-regular">Experiences</button>
        <button className="text-base-regular">Online Experiences</button>
      </div>

      <div className="nav-right">
        <button className="text-xs-medium">Become a host</button>
        <img src="/images/globe.png" alt="globe" />
        <div className="profile-dropdown">
          <img src="/images/menu.svg" />
          <img src="/images/Avatar.svg" />
        </div>
      </div>
    </div>
  );
};

export default BnbnavHome;
