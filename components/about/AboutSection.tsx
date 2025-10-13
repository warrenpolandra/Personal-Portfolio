"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AboutDescription from "./AboutDescription";
import AboutTab from "./AboutTab";

const AboutSection = () => {
  return (
    <section className="text-white xl:min-h-screen" id="about">
      <div className="md:grid md:grid-cols-2 gap-4 xl:gap-8 items-center py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden xl:flex justify-center sm:flex-none sm:justify-center row-span-2"
        >
          <Image
            src="./images/about.jpg"
            alt="avatar"
            width={400}
            height={400}
          />
        </motion.div>
        <AboutDescription />
        <AboutTab />
      </div>
    </section>
  );
};

export default AboutSection;
