"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { authorProfiles } from "@/data/authors";
import { researchItems } from "@/data/researchItems";

const formatDate = (year: number, month: number) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1)));

const ResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const sortedResearchItems = [...researchItems].sort(
    (a, b) => b.year - a.year || b.month - a.month
  );
  const itemVariants = {
    initial: { x: -40, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <section id="research" ref={ref} className="py-8 text-white">
      <motion.h2
        variants={itemVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.4 }}
        className="text-center text-2xl font-bold sm:text-4xl"
      >
        Research Activities
      </motion.h2>
      <motion.p
        variants={itemVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mx-auto mt-4 max-w-2xl text-center text-sm text-[#ADB7BE] sm:text-base"
      >
        Research outputs, academic activities, and presentations.
      </motion.p>

      <div className="mx-auto mt-10 max-w-3xl border-l-2 border-[#33353F] pl-8">
        {sortedResearchItems.map((item, index) => {
          const isLastItem = index === sortedResearchItems.length - 1;

          return (
            <motion.article
              key={`${item.type}-${item.year}-${item.month}-${item.title}`}
              variants={itemVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
              className={`relative ${isLastItem ? "" : "pb-10"}`}
            >
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-primary-500 bg-[#121212]" />
              <p className="text-sm font-semibold text-primary-400">
                {formatDate(item.year, item.month)}
              </p>
              <p className="mt-2 text-sm font-semibold text-[#ADB7BE]">
                {item.type}
              </p>
              <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
              {item.authors && (
                <p className="mt-2 text-[#ADB7BE]">
                  {item.authors.map((authorId, authorIndex) => {
                    const author = authorProfiles[authorId];

                    return (
                      <span key={authorId}>
                        {authorIndex > 0 && ", "}
                        <a
                          href={author.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white hover:underline"
                        >
                          {author.name}
                        </a>
                      </span>
                    );
                  })}
                </p>
              )}
              {item.event && (
                <p className="mt-2 text-[#ADB7BE]">
                  {item.eventUrl ? (
                    <a
                      href={item.eventUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white hover:underline"
                    >
                      {item.event}
                    </a>
                  ) : (
                    item.event
                  )}
                </p>
              )}
              {(item.publicationUrl ||
                item.paperUrl ||
                item.presentationUrl ||
                item.posterUrl) && (
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-primary-400">
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {item.paperUrl && (
                      <a
                        href={item.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-300 hover:underline"
                      >
                        Paper PDF
                      </a>
                    )}
                    {item.presentationUrl && (
                      <a
                        href={item.presentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-300 hover:underline"
                      >
                        Presentation PDF
                      </a>
                    )}
                    {item.posterUrl && (
                      <a
                        href={item.posterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-300 hover:underline"
                      >
                        Poster PDF
                      </a>
                    )}
                  </div>
                  {item.publicationUrl && (
                    <a
                      href={item.publicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-300 hover:underline"
                    >
                      Proceedings →
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default ResearchSection;
