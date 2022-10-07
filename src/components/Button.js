import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="bg-Cyan text-white px-6 py-2 rounded-3xl hover:bg-Cyan/50 ease-in duration-300" >{props.children}</button>
    </>
  );
};

export default Button;
