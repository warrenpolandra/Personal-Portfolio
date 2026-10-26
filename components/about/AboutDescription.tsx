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
        My primary interest is in Software Engineering research, with a focus
        on AI agents and software ecosystems. I&apos;m interested in understanding
        how intelligent agents can support software development and how
        software ecosystems evolve through interactions between developers,
        tools, platforms, and communities. Alongside my research, I have
        experience building Android, web, and back-end applications using Kotlin,
        Jetpack Compose, React, Next.js, Spring Boot, and PostgreSQL.
      </p>
    </motion.div>
  );
};

export default AboutDescription;
