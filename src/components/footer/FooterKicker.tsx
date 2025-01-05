import React from "react";

const FooterKicker: React.FC = () => {
  const Dot = () => <span className="dot"> · </span>;

  return (
    <div className="kicker-container">
      <div className="kicker-left">
        <p>
          © 2022 Airbnb, Inc.
          <Dot />
          <a href="#">Privacy</a>
          <Dot />
          <a href="#">Terms</a>
          <Dot />
          <a href="#">Sitemap</a>
        </p>
      </div>
      <div className="kicker-right">
        <a href="#">🌐 English (US)</a>
        <a href="#">💲 USD</a>
        <a href="#">📘</a>
        <a href="#">🐦</a>
        <a href="#">📸</a>
      </div>
    </div>
  );
};

export default FooterKicker;
