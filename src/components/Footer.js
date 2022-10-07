import React from "react";
import image from "../images/logo.svg";
import imageOne from "../images/icon-facebook.svg";
import imageTwo from "../images/icon-twitter.svg";
import imageThree from "../images/icon-instagram.svg";
import imageFour from "../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className="bg-VeryDarkViolet py-16 flex flex-col lg:flex-row lg:justify-evenly justify-center items-center">
      <div className="mb-8 lg:mb-24">
        <img src={image} alt=""></img>
      </div>

      <ul className="list-none text-center text-white mb-8">
        <h3 className="font-medium mb-4 "> Features</h3>
        <li className="opacity-70  text-sm hover:text-Cyan cursor-pointer">Link Shortening</li>
        <li className="opacity-70  text-sm hover:text-Cyan cursor-pointer">Branded Links</li>
        <li className="opacity-70  text-sm hover:text-Cyan cursor-pointer">Analytics</li>
      </ul>
      <ul className="list-none text-center text-white mb-8">
        <h3 className="font-medium mb-4 ">Resources</h3>
        <li className="opacity-70 text-sm hover:text-Cyan cursor-pointer">Blog</li>
        <li className="opacity-70  text-sm hover:text-Cyan cursor-pointer">Developers</li>
        <li className="opacity-70  text-sm hover:text-Cyan cursor-pointer">Support</li>
      </ul>
      <ul className="list-none text-center text-white mb-8">
        <h3 className="font-medium mb-4 lg:mt-6 "> Company</h3>
        <li className="opacity-70  text-sm hover:text-Cyan cursor-pointer"> About</li>
        <li className="opacity-70  text-sm  hover:text-Cyan cursor-pointer">Our Team</li>
        <li className="opacity-70  text-sm hover:text-Cyan cursor-pointer">Careers</li>
        <li className="opacity-70  text-sm hover:text-Cyan cursor-pointer">Contact</li>
      </ul>
      <ul className="list-none flex space-x-6 lg:mb-24">
        <img src={imageOne} alt=""></img>
        <img src={imageTwo} alt=""></img>
        <img src={imageThree} alt=""></img>
        <img src={imageFour} alt=""></img>
      </ul>
    </div>
  );
};

export default Footer;
