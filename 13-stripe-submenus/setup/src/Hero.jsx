import React, { useState } from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={()=>closeSubmenu()}>
      <div className="hero-center">
        <div className="hero-info">
          <h1>Payments infrastructure for the internet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur excepturi, cum cupiditate libero voluptate illum.
            Quidem placeat impedit illo vero.
          </p>
        </div>
      <div className="hero-images">
        <img src={phoneImg} alt="phoneimage" />
      </div>
      </div>
    </section>
  );
};

export default Hero;
