"use client";
import { type ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const AnimatedExternalLink = ({
  href,
  children,
  className = "",
}: AnimatedExternalLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ textDecorationColor: "rgba(251, 146, 60, 0)" }}
      whileHover={{ textDecorationColor: "rgb(251, 146, 60)" }}
      transition={{ duration: 0.2 }}
      className={`underline underline-offset-4 ${className}`}
    >
      {children}
    </motion.a>
  );
};

export default AnimatedExternalLink;
