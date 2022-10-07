import React from "react";
import SubInfo from "./SubInfo";
import image from "../images/icon-brand-recognition.svg";
import imageTwo from "../images/icon-detailed-records.svg"
import imageThree from "../images/icon-fully-customizable.svg"

const Info = () => {
  return (
    <div className="">
      <div className="mt-12 mb-12 flex flex-col items-center justify-center ">
        <h3 className="text-2xl font-bold text-VeryDarkBlue mb-4">
          Advanced Statistics
        </h3>
        <p className="text-md text-center font-semiBold text-GrayishViolet mb-16 px-16 lg:w-150">
          Track how your links are performing across the web with our statistics
          dashboard
        </p>
      </div>
      <div className="flex flex-col justify-center items-center pb-16 space-y-0 lg:flex lg:flex-row lg:space-x-0">
        <SubInfo>
          <div>
            <div className="bg-white w-128 p-4 flex flex-col justify-center lg:justify-start lg:item-start items-center rounded-md">
              <div className="bg-DarkViolet p-5 -mt-12 lg:-ml-52 rounded-full">
                <img src={image} alt=""></img>
              </div>
              <div className="mt-8 mb-4 lg:text-left lg:mr-1p font-bold text-VeryDarkBlue text-xl">
                Brand Recognition
              </div>
              <p className="text-center lg:text-left font-semiBold text-GrayishViolet">
                Boost your brand recognition with each clicks.Generic links
                don't mean a thing. Branded links help instill confidence in
                your content.
              </p>  
            </div>
          </div>
        </SubInfo>
        <div className="h-24 w-2 bg-Cyan py-8 lg:hidden"></div>
        <hr className="hidden lg:block lg:bg-Cyan lg:p-1 lg:w-12 lg:mt-32" ></hr>
        <SubInfo>
          <div>
            <div className="bg-white w-128 p-4 lg:mt-12 flex flex-col justify-center items-center rounded-md">
              <div className="bg-DarkViolet p-5 -mt-12 lg:-ml-52 rounded-full">
                <img src={imageTwo} alt=""></img>
              </div>
              <div className="mt-8 mb-4 lg:mr-2p font-bold text-VeryDarkBlue text-xl">
                Detailed Records
              </div>
              <p className="text-center lg:text-left font-semiBold text-GrayishViolet">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div> 
        </SubInfo>
        <hr className="hidden lg:block lg:bg-Cyan lg:p-1 lg:w-10 lg:mt-44" ></hr>
        <div className="h-24 w-2 bg-Cyan py-8 lg:hidden"></div>
        <SubInfo>
          <div>
            <div className="bg-white w-128 p-4 lg:mt-32 flex flex-col justify-center items-center rounded-md">
              <div className="bg-DarkViolet p-5 -mt-12 lg:-ml-52 rounded-full">
                <img src={imageThree} alt=""></img>
              </div>
              <div className="mt-8 mb-4 lg:mr-32 font-bold text-VeryDarkBlue text-xl">
                Fully Customizable
              </div>
              <p className="text-center lg:text-left font-semiBold text-GrayishViolet">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </SubInfo>
      </div>
    </div>
  );
};

export default Info;
