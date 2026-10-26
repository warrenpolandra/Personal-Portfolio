"use client";
import React from "react";
import { motion } from "framer-motion";
import AboutDescription from "./AboutDescription";
import CertificateCard from "./Certifications";
import Skills from "./Skills";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="py-8">
        <AboutDescription />
        <div className="mt-8 grid gap-8 xl:grid-cols-2 xl:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Skills</h3>
            <Skills />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-xl font-semibold sm:text-2xl">
              Certifications
            </h3>
            <CertificateCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
