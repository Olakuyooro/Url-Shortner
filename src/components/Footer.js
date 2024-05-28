import React, { useEffect, useRef } from "react";
import image from "../images/logo.svg";
import imageOne from "../images/icon-facebook.svg";
import imageTwo from "../images/icon-twitter.svg";
import imageThree from "../images/icon-instagram.svg";
import imageFour from "../images/icon-pinterest.svg";
import { useAnimation, useInView, motion } from "framer-motion";

const Footer = () => {
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

  const linkVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const links = [
    { name: "Link Shortening", delay: 0.25 },
    { name: "Branded Links", delay: 0.35 },
    { name: "Analytics", delay: 0.45 },
    { name: "Blog", delay: 0.55 },
    { name: "Developers", delay: 0.65 },
    { name: "Support", delay: 0.75 },
    { name: "About", delay: 0.85 },
    { name: "Our Team", delay: 0.95 },
    { name: "Careers", delay: 1.05 },
    { name: "Contact", delay: 1.15 },
  ];

  const socialLinks = [
    { src: imageOne, alt: "Facebook", delay: 1.25 },
    { src: imageTwo, alt: "Twitter", delay: 1.35 },
    { src: imageThree, alt: "Instagram", delay: 1.45 },
    { src: imageFour, alt: "Pinterest", delay: 1.55 },
  ];

  return (
    <div
      ref={ref}
      className="bg-VeryDarkViolet py-16 flex flex-col lg:flex-row lg:justify-evenly justify-center items-center"
    >
      <div className="mb-8 lg:mb-24">
        <img src={image} alt=""></img>
      </div>

      <ul className="list-none text-center text-white mb-8">
        <h3 className="font-medium mb-4">Features</h3>
        {links.slice(0, 3).map((link, index) => (
          <motion.li
            key={index}
            variants={linkVariants}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: link.delay }}
            className="opacity-70 text-sm hover:text-Cyan cursor-pointer"
          >
            {link.name}
          </motion.li>
        ))}
      </ul>
      <ul className="list-none text-center text-white mb-8">
        <h3 className="font-medium mb-4">Resources</h3>
        {links.slice(3, 6).map((link, index) => (
          <motion.li
            key={index + 3}
            variants={linkVariants}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: link.delay }}
            className="opacity-70 text-sm hover:text-Cyan cursor-pointer"
          >
            {link.name}
          </motion.li>
        ))}
      </ul>
      <ul className="list-none text-center text-white mb-8">
        <h3 className="font-medium mb-4 lg:mt-6">Company</h3>
        {links.slice(6).map((link, index) => (
          <motion.li
            key={index + 6}
            variants={linkVariants}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: link.delay }}
            className="opacity-70 text-sm hover:text-Cyan cursor-pointer"
          >
            {link.name}
          </motion.li>
        ))}
      </ul>
      <ul className="list-none flex space-x-6 lg:mb-24">
        {socialLinks.map((link, index) => (
          <motion.img
            key={index}
            src={link.src}
            alt={link.alt}
            variants={linkVariants}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: link.delay }}
            className="cursor-pointer"
          />
        ))}
      </ul>
    </div>
  );
};

export default Footer;
