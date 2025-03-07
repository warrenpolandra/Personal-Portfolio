"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import Skills from "./Skills";
import CertificateCard from "./Certifications";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center sm:flex-none sm:justify-center"
        >
          <Image
            src="/images/about.jpg"
            alt="avatar"
            width={400}
            height={400}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m familiar with some web frameworks such as React and Next
            JS. I have a few basic experience in Back End Development. Some of
            the projects that I have developed were built using Node JS, GoLang,
            and Spring Boot. I have 2.5 years of experience in Android
            development with Jetpack Compose. I&apos;m also familiar with both
            Java and Kotlin in Android development. In addition, I have some
            basic experience with Flutter framework
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-4 md:mt-8">
            {tab === "skills" && <Skills />}
            {tab === "certifications" && <CertificateCard />}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
