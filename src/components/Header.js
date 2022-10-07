import React from "react";
import Button from "./Button";
import image from "../images/logo.svg";

const Header = (props) => {
  

  return (
    <>
      <div className="flex justify-between lg:flex px-6 py-8 text-sm text-Gray font-semibold lg:pl-32">
        <div className="lg:flex">
          <img src={image} alt=""></img>
          <ul className="hidden lg:block lg:ml-20 lg:space-x-5 ">
            <a className="hover:text-black cursor-pointer">Features</a>
            <a className="hover:text-black cursor-pointer">Pricing</a>
            <a className="hover:text-black cursor-pointer">Resources</a>
          </ul>
        </div>
        <ul className="hidden lg:block lg:ml-32 lg:space-x-8 ">
          <a className="hover:text-black cursor-pointer">Login</a>
          <Button>
            Sign Up
          </Button>
        </ul>
        <div>
          {props.first && <span 
            onClick={props.order}
            className="material-symbols-outlined cursor-pointer lg:hidden"
          >
            menu
          </span>}
          {props.second && <span onClick={props.secondControl} className="material-symbols-outlined cursor-pointer lg:hidden">menu</span>}
        </div>
      </div>
    </>
  );
};

export default Header;
