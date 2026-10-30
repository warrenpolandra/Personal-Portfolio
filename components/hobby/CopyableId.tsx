"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type CopyableIdProps = {
  label: string;
  value: string;
  className?: string;
};

const CopyableId = ({
  label,
  value,
  className = "ml-auto self-end",
}: CopyableIdProps) => {
  const [copied, setCopied] = useState(false);

  const copyValue = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.button
      type="button"
      onClick={copyValue}
      initial="rest"
      whileHover="hover"
      className={`relative text-right text-lg text-[#ADB7BE] ${className}`}
      title={`Copy ${label}`}
    >
      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="absolute -top-6 right-0 text-sm font-semibold text-primary-400"
          >
            Copied!
          </motion.span>
        )}
      </AnimatePresence>
      <span>
        {label}: {" "}
        <motion.span className="relative inline-block font-semibold text-white">
          {value}
          <motion.span
            variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 h-px w-full origin-left bg-primary-400"
          />
        </motion.span>
      </span>
    </motion.button>
  );
};

export default CopyableId;
