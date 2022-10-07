import React, { useState } from "react";
import "./Shortlist.css";




const ShortList = (props) => {

  



  const resultSite = props.item.map((link) => (
    <div
      key={link.code}
      className="outputList bg-white mb-4 px-2 py-6 rounded-md font-medium w-128 lg:flex justify-between lg:w-180"
    >
      <li className="list-none mb-2 lg:mt-2 overflow-hidden">{link.original}</li>
      <hr className="line w-128 m-auto mb-3 lg:hidden"></hr>
      <div className="lg:flex lg:flex-row space-x-4 ">
        <li className="text-Cyan list-none mb-2 lg:mt-2">{link.shortened}</li>
         <Button link={link}/>
      </div>
    </div>
  ));

  return <>{resultSite}</>;
};

export default ShortList;

function Button({link})
{
  const [isClicked, setIsClicked] = useState(false);
  const [textchange, setTextChange] = useState("Copy");

  const clickChanger = () => {
    setIsClicked(true);
    setTextChange("Copied!");
  };

  return <div className="flex justify-center"> <button
  id={link.code}
  style={{ backgroundColor: isClicked ? "hsl(257, 27%, 26%)" : "" }}
  onClick={() => {
      clickChanger ();
    navigator.clipboard.writeText(link.shortened);
  }}
  className="bg-Cyan text-white py-2 px-6 w-72 rounded-md lg:w-32 "
>
  {textchange}
</button>
</div>
}
