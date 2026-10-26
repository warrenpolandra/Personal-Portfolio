"use client";
import { useRef } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { skillsItems } from "@/data/skillItems";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div
      ref={ref}
      className="bg-[#181818] py-4 rounded-xl grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 xl:grid-cols-5 gap-6 overflow-hidden px-8 justify-items-center"
    >
      {skillsItems.map((skill, index) => (
        <motion.div
          key={index}
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className={`flex w-[56px] flex-col items-center sm:w-[64px] lg:w-[80px] ${
            index === skillsItems.length - 1
              ? "col-span-full justify-self-center sm:col-span-1 md:col-span-full xl:col-span-1"
              : ""
          }`}
        >
          <Link
            href={skill.link}
            title={skill.alt}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block aspect-square w-full"
          >
            <Image
              src={`./images/icons/${skill.path}`}
              alt={skill.alt}
              fill
              className="object-cover transition-all duration-200 ease-out hover:scale-110"
            />
          </Link>
          <span className="mt-2 flex min-h-10 items-center justify-center text-center text-xs leading-tight text-[#ADB7BE]">
            {skill.alt}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
