"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { filterItems, projectsItems } from "@/data";
import { motion, useInView } from "framer-motion";

const ProjectSection = () => {
  const ref = useRef(null);
  const BATCH_SIZE = 6;
  const [tag, setTag] = useState("All");
  const [projectCount, setProjectCount] = useState(6);
  const [batchCount, setBatchCount] = useState(1);

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
    setProjectCount(6);
  };

  const handleLoadMore = () => {
    setBatchCount(batchCount + 1);
    setProjectCount((prev) => prev + BATCH_SIZE);
  };

  const handleSeeLess = () => {
    setProjectCount(6);
  };

  const totalFilteredProjects = projectsItems.filter((project) =>
    project.tag.includes(tag)
  ).length;

  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsItems
    .filter((project) => project.tag.includes(tag))
    .slice(0, projectCount);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white my-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
        {filterItems.map((filter, index) => (
          <ProjectTag
            key={index}
            name={filter}
            onClick={handleTagChange}
            isSelected={tag === filter}
          />
        ))}
      </div>
      <motion.ul
        transition={{ duration: 0.5, ease: "easeInOut" }}
        key={tag}
        ref={ref}
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: (index % BATCH_SIZE) * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          </motion.li>
        ))}
      </motion.ul>
      {(projectCount < totalFilteredProjects ||
        (projectCount > 6 && totalFilteredProjects > 6)) && (
        <div className="flex justify-center mt-6">
          <button
            onClick={
              projectCount < totalFilteredProjects
                ? handleLoadMore
                : handleSeeLess
            }
            className="px-6 py-2 text-white text-xl rounded-xl my-8 bg-primary-500 hover:bg-primary-600"
          >
            {projectCount < totalFilteredProjects ? "Load More" : "See Less"}
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
