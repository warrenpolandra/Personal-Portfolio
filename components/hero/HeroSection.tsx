"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroDescription from "./HeroDescription";
import { GoArrowDown } from "react-icons/go";

const HeroSection = () => {
  return (
    <section
      className="flex min-h-screen min-h-[100dvh] flex-col items-center justify-end border-b-primary pt-16 pb-8 lg:pt-20"
      id="hero"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center justify-center">
        <HeroDescription />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 lg:col-span-4 place-self-center mt-4 lg:mt-0 order-1 md:order-2 mb-4 sm:mb-0 w-[50%] md:w-full aspect-square"
        >
          <div className="w-full h-full relative overflow-hidden rounded-full border-4 sm:border-8 border-primary-500">
            <Image
              src="./images/avatar.jpeg"
              alt="Avatar"
              className="object-cover scale-125 translate-x-[-5%] translate-y-[-10%]"
              fill
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-4 md:mt-0 text-primary-50 cursor-pointer border-2 border-light rounded-full w-[38px] h-[60px] lg:w-[50px] lg:h-[80px] flex items-center justify-center"
      >
        <a
          href="#about"
          aria-label="Go to About Me section"
          className="flex h-full w-full items-center justify-center"
        >
          <div className="animate-bounce pt-4">
            <GoArrowDown className="h-8 w-8 lg:h-12 lg:w-12" />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
