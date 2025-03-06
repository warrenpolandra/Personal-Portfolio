"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello! I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Warren Gerald Polandra",
                1000,
                "A Software Engineer",
                1000,
                "A Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl mr-10">
            Hi! you can call me Warren. I&apos;m a fresh graduate software
            engineering student, and I have participated in various volunteering
            events and organization. I&apos;m also Interested in new things and
            looking forward to work together in a team to build new projects.
            I&apos;m certified in expert Android developer with Jetpack Compose
            and intermediate Front-End developer.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
              Hire me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download my CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-primary-500 w-[ h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/avatar.png"
              alt="Avatar"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={390}
              height={390}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
