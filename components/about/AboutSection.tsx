"use client";
import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import AboutDescription from "./AboutDescription";
import AboutTab from "./AboutTab";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="py-8">
        <AboutDescription />
        <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-2 xl:order-none"
          >
            <Link
              href="https://github.com/warrenpolandra"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-2xl border border-[#33353F] bg-[#181818] p-6 transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                <FaGithub className="h-12 w-12 text-white" />
                <div>
                  <p className="text-sm text-[#ADB7BE]">GitHub</p>
                  <h3 className="text-xl font-semibold text-white">
                    @warrenpolandra
                  </h3>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm font-semibold text-white">
                  Current Focus
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary-500/20 px-3 py-1 text-xs text-primary-300 sm:text-sm">
                    AI Agents
                  </span>
                  <span className="rounded-full bg-primary-500/20 px-3 py-1 text-xs text-primary-300 sm:text-sm">
                    Software Ecosystems
                  </span>
                  <span className="rounded-full bg-primary-500/20 px-3 py-1 text-xs text-primary-300 sm:text-sm">
                    Software Engineering
                  </span>
                </div>
              </div>
              <p className="mt-6 text-[#ADB7BE]">
                Explore my open-source projects and development work.
              </p>
              <span className="mt-6 block font-semibold text-primary-400">
                View profile →
              </span>
            </Link>
          </motion.div>
          <AboutTab />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
