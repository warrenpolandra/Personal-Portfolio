import React from "react";
import { motion } from "framer-motion";

const AboutDescription = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-4 md:mt-0 text-center md:text-left"
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
        About Me
      </h2>
      <p className="text-sm sm:text-base lg:text-lg">
        I&apos;m familiar with some web frameworks such as React and Next JS. I
        have a few basic experience in Back End Development. Some of the
        projects that I have developed were built using Node JS, GoLang, and
        Spring Boot. I have 2.5 years of experience in Android development with
        Jetpack Compose. I&apos;m also familiar with both Java and Kotlin in
        Android development. In addition, I have some basic experience with
        Flutter framework.
      </p>
    </motion.div>
  );
};

export default AboutDescription;
