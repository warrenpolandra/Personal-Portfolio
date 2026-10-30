"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { certificationItems } from "@/data/certificationitems";

const CertificateCard = () => {
  const ref = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const isInView = useInView(ref, { once: true });
  const visibleCertifications = showAll
    ? certificationItems
    : certificationItems.slice(0, 4);
  const variants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <div ref={ref}>
      <ol className="divide-y divide-[#33353F]">
        {visibleCertifications.map((certificate, index) => (
          <motion.li
            key={certificate.filepath}
            variants={variants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{
              duration: 0.3,
              delay: showAll ? Math.max(0, index - 4) * 0.1 : index * 0.1,
            }}
            className="py-5 first:pt-0"
          >
            <Link
              href={`./files/certificates/${certificate.filepath}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4"
            >
              <span className="text-2xl font-bold tabular-nums text-primary-500/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 pt-1 font-semibold text-white transition-colors group-hover:text-primary-300 group-hover:underline">
                {certificate.name}
              </span>
              <span
                aria-hidden="true"
                className="pt-1 text-lg text-[#ADB7BE] transition-colors group-hover:text-primary-300"
              >
                ↗
              </span>
            </Link>
          </motion.li>
        ))}
      </ol>
      {certificationItems.length > 4 && (
        <button
          type="button"
          onClick={() => setShowAll((current) => !current)}
          className="mt-5 text-sm font-semibold text-primary-400 hover:text-primary-300 hover:underline"
        >
          {showAll
            ? "Show fewer certifications"
            : `Show ${certificationItems.length - 4} more certifications`}
        </button>
      )}
    </div>
  );
};

export default CertificateCard;
