import React from "react"; 
import Button from "./Button";

const PreFooter = ()=>{
    return(
        <div className="bg-DarkViolet bg-footer-texture h-60 p-5 flex flex-col justify-center items-center
        ">
            <h2 className="text-white font-bold text-2xl lg:text-4xl
             mb-6">Boost your links today</h2>
            <Button>Get Started</Button>
        </div>
    )
}

export default PreFooter;