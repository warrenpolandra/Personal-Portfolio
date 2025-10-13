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
          className={`w-[56px] sm:w-[64px] lg:w-[80px] aspect-square relative ${
            index === skillsItems.length - 1
              ? "col-span-full sm:col-span-1 md:col-span-full justify-self-cente xl:col-span-1"
              : ""
          }`}
        >
          <Link href={skill.link} title={skill.alt} target="_blank">
            <Image
              src={`./images/icons/${skill.path}`}
              alt={skill.alt}
              fill
              className="object-cover hover:scale-110 transition-all duration-200 ease-out"
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
