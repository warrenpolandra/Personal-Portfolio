"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { tabItems } from "@/data";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex justify-center sm:flex-none sm:justify-normal">
          <Image
            src="/images/avatar.png"
            alt="avatar"
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            inventore iusto excepturi reiciendis. Repellendus dolores ut et
            assumenda at molestias?
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
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certification{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            <ul className="list-disc pl-2">
              {tabItems
                .find((t) => t.id === tab)
                ?.content.map((contentItem, index) => (
                  <li key={index}>{contentItem}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
