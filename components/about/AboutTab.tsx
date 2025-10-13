"use client";
import React, { useState, useTransition } from "react";
import { motion } from "framer-motion";
import TabButton from "./TabButton";
import CertificateCard from "./Certifications";
import Skills from "./Skills";

const AboutTab = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
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
      <div className="mt-4">
        {tab === "skills" && <Skills />}
        {tab === "certifications" && <CertificateCard />}
      </div>
    </motion.div>
  );
};

export default AboutTab;
