import React from "react";
import image from "../images/illustration-working.svg";
import Hamburger from "./Hamburger";

const HeroSection = (props) => {
    


  return (
    <>
      <div className="flex justify-center items-center">
       {props.showImage && <img className="w-10/12" src={image} alt=""></img>} 
      </div>
      {props.menu && <Hamburger />}
    </>
  );
};

export default HeroSection;
