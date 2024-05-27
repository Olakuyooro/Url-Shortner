import React, { useRef, useState } from "react";
import ShortList from "./ShortList";
import "./Shortner.css";
import { motion } from "framer-motion";

const model = (original, shortened, code) => ({
  original,
  shortened,
  code,
});

const Shortener = () => {
  const enteredUrl = useRef();
  const [state, setState] = useState({
    newList: [],
    error: false,
    borderChange: false,
    isLoading: false,
  });

  const formHandler = async (event) => {
    event.preventDefault();

    const tunUrl = enteredUrl.current.value;
    if (tunUrl.trim() === "") {
      setState({ ...state, error: true, borderChange: true });
      return;
    } else {
      setState({ ...state, error: false, borderChange: false, isLoading: true });
    }

    try {
      const response = await fetch("https://backend-url-shortner-6pfa.onrender.com/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "originalUrl": tunUrl }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const update = await response.json();
      console.log(update.shortUrl)
      setState((prevState) => ({
        ...prevState,
        newList: [
          ...prevState.newList,
          model(tunUrl, `https://backend-url-shortner-6pfa.onrender.com/${update.shortUrl}`, update.shortUrl),
        ],
        isLoading: false,
      }));

    } catch (error) {
      console.error("Error:", error);
      setState({ ...state, error: true, borderChange: true, isLoading: false });
    }

    enteredUrl.current.value = "";
  };

  return (
    <div>
      <motion.form
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="short w-128 -mt-16 bg-hero-pattern bg-no-repeat bg-DarkViolet mb-16 rounded-md flex flex-col justify-center items-center lg:w-180 lg:flex-row lg:-mt-20 lg:space-x-6"
        onSubmit={formHandler}
      >
        <div className="mb-8 lg:mb-0 lg:mt-0 h-9">
          <input
            type="url"
            placeholder="Shorten a link here..."
            ref={enteredUrl}
            className={`p-2 rounded-lg lg:w-170 ${state.borderChange ? 'border-red-500 border' : ''}`}
          />
          {state.error && <p className="text-red-500 text-sm">Please add a valid link</p>}
        </div>
        <button
          className="bg-Cyan text-white px-16 py-2 rounded-md"
          type="submit"
          disabled={state.isLoading}
        >
          {state.isLoading ? "Shortening..." : "Shorten it!"}
        </button>
      </motion.form>

      <ShortList item={state.newList} />
    </div>
  );
};

export default Shortener;
