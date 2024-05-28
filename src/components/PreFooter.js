import React, { useEffect, useRef } from "react";
import Button from "./Button";
import { useAnimation, useInView, motion } from "framer-motion";

const PreFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);
  return (
    <div ref={ref}>
      <motion.div
        className="bg-DarkViolet bg-footer-texture h-60 p-5 flex flex-col justify-center items-center
      "
      >
        <motion.div
          className="flex flex-col justify-center items-center"
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h2
            className="text-white font-bold text-2xl lg:text-4xl
           mb-6"
          >
            Boost your links today
          </h2>
          <Button>Get Started</Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PreFooter;
