"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { certificationItems } from "@/data/certificationitems";

const CertificateCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const variants = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };
  return (
    <div ref={ref} className="overflow-hidden bg-[#181818] rounded-xl p-4">
      <ul className="list-disc text-white list-inside space-y-2">
        {certificationItems.map((certificates, index) => (
          <motion.li
            key={index}
            variants={variants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group text-sm sm:text-base"
          >
            <Link
              href={`./files/certificates/${certificates.filepath}`}
              target="_blank"
              className="relative group transition-all duration-300"
            >
              {certificates.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default CertificateCard;
