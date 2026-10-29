"use client";
import { type ReactNode } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

type HobbyDropdownProps = {
  id: string;
  icon: string;
  title: string;
  description: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

const HobbyDropdown = ({
  id,
  icon,
  title,
  description,
  children,
  isOpen,
  onToggle,
}: HobbyDropdownProps) => {
  const handleToggle = () => {
    onToggle();
    window.history.pushState(null, "", `#${id}`);
    window.setTimeout(() => {
      const dropdown = document.getElementById(id);
      if (!dropdown) return;

      window.scrollTo({
        top: window.scrollY + dropdown.getBoundingClientRect().top - 96,
        behavior: "smooth",
      });
    }, 250);
  };

  return (
    <section
      id={id}
      className="overflow-hidden rounded-2xl border border-[#33353F] bg-[#181818]"
    >
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-8"
      >
        <div>
          <h2 className="flex items-center gap-1.5 text-2xl font-bold text-white sm:text-3xl">
            <span aria-hidden="true">{icon}</span>
            {title}
          </h2>
          <p className="mt-1 text-sm text-[#ADB7BE] sm:text-base">
            {description}
          </p>
        </div>
        <ChevronDownIcon
          className={`h-6 w-6 shrink-0 text-primary-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#33353F] px-5 pt-6 sm:px-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HobbyDropdown;
