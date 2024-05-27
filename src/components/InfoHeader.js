import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const InfoHeader = () => {
  return (
    <div className="mt-6 text-center lg:text-start lg:pl-32 flex-col px-5">
      <motion.h2
        className="text-4xl lg:text-7xl font-bold text-VeryDarkBlue mb-4"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        More than just shorter links
      </motion.h2>
      <motion.p
        className="text-lg font-semiBold text-Gray mb-4 lg:text-lg lg:w-150"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
      >
        Build your brand's recognition and get detailed insights on how your
        links are transforming
      </motion.p>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
      >
        <Button>Get Started</Button>
      </motion.div>
    </div>
  );
};

export default InfoHeader;
