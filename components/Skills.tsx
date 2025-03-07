"use client";
import { skillsItems } from "@/data";
import { useRef } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

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
      className="bg-[#181818] py-4 rounded-xl flex gap-6 flex-wrap justify-center overflow-hidden"
    >
      {skillsItems.map((skill, index) => (
        <motion.div
          key={index}
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Link href={skill.link} title={skill.alt} target="_blank">
            <Image
              src={`/Personal-Portfolio/images/icons/${skill.path}`}
              alt={skill.alt}
              width={100}
              height={100}
              className="hover:scale-110 transition-all duration-200 ease-out"
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
