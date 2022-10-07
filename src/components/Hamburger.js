import React from "react";
import Button from "./Button";

const Hamburger = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-DarkViolet w-80 h-96 px-6 py-12 rounded-3xl text-white text-lg">
        <div className="flex justify-center">
          <ul className="text-center space-y-5" >
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
        <hr className="mb-6 mt-6"></hr>
        <ul className="flex justify-center">
          <li>Login</li>
        </ul>
        <div className="flex justify-center mt-5" ><Button>Sign Up</Button></div>
        
      </div>
    </div>
  );
};

export default Hamburger;
