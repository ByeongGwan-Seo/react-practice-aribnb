import BnbnavHome from "@/components/nav/BnbnavHome";
import BnbnavSearch from "@/components/nav/BnbnavSearch";
import BnbnavImage from "@/components/nav/BnbnavImage";
import Inspiration from "@/components/inspiration/Inspiration";
import React from "react";

const Home = () => {
  return (
    <div>
      <section className="home-top-section">
        <BnbnavHome />
        <BnbnavSearch />
        <BnbnavImage />
      </section>
      <section className="home-inspiration-section">
        <Inspiration />
      </section>
    </div>
  );
};

export default Home;
