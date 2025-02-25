"use client";
import { achievementsItems } from "@/data";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] border rounded-md py-8 px-16 grid grid-cols-2 gap-10 lg:flex lg:flex-row items-center justify-between">
        {achievementsItems.map((achievement) => {
          return (
            <div
              key={achievement.id}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix && `${achievement.prefix} `}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={achievement.value}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                />
                {achievement.postfix && `${achievement.postfix} `}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
