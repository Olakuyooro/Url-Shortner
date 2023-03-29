import React, { useRef, useState } from "react";
import ShortList from "./ShortList";
import "./Shortner.css";


const model = (original, shortened, code) => ({
  original,
  shortened,
  code
});


const Shortener = () => {
  const enteredUrl = useRef();
  const [newList, setList] = useState([]);
  const [error, setError] = useState(false)
  const [borderChange, setBorderColor] = useState(false)
 

  const formHandler = (event) => {
    event.preventDefault();

    const tunUrl = enteredUrl.current.value;
    console.log(tunUrl)

    if (tunUrl.trim() === "") {
      setError(true)
      setBorderColor(true)
      return
    }else{
      setError(false)
      setBorderColor(false)
    }


    fetch(`https://api.shrtco.de/v2/shorten?url=${tunUrl}`, {
      method: "POST",
      body:JSON.stringify(),
    })
      .then((data) => {
        return data.json();
      })
      .then((update) => {
        console.log(update);
        setList((prevList) => {
          return [
            ...prevList,
            model(update.result.original_link, update.result.short_link, update.result.code)
          ];
        });
      });

    enteredUrl.current.value = "";
  };




  return (
    <>
      <div>
        <form
          className="short w-128 -mt-16 bg-hero-pattern bg-no-repeat bg-DarkViolet mb-16 rounded-md flex flex-col justify-center items-center lg:w-180 lg:flex-row lg:-mt-20 lg:space-x-6 "
          onSubmit={formHandler}
        > <div className=" mb-8 lg:mb-0 lg:mt-0 h-9"> <input
            type="url"
            placeholder="Shorten a link here..."
            ref={enteredUrl}
            style={{border: borderChange ? '0.5px red solid': ""}}
            className="p-2 rounded-lg lg:w-170"
          ></input>
          {error && <p className="text-red-500 text-sm ">Please add a link</p>}</div>
         
          <button
            className="bg-Cyan text-white px-16 py-2 rounded-md"
            type="submit"
          >
            Shorten it!
          </button>
        </form>

        <ShortList item={newList}></ShortList>
      </div>
    </>
  );
};

export default Shortener;
