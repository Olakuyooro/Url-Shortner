import React from "react";
import Button from "./Button";


const InfoHeader = ()=>{
    return(
        <> <div className="mt-6 text-center lg:text-start lg:pl-32 flex-col px-5">
            <h2 className="text-4xl lg:text-7xl font-bold text-VeryDarkBlue mb-4">More than just shorter links</h2>
            <p className="text-lg font-semiBold text-Gray mb-4 lg:text-lg lg:w-150">Build your brand's recognition and get detailed insights on how your links are transforming</p>
            <Button>Get Started</Button>
        </div>
       </>
    )
}

export default InfoHeader;