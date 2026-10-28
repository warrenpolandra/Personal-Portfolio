"use client";
import Link from "next/link";
import type { MouseEvent } from "react";

export const NavLink = ({ href, title }: { href: string; title: string }) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const sectionId = href.split("#")[1];
    const section = sectionId ? document.getElementById(sectionId) : null;

    if (!section) return;

    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${sectionId}`);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="block rounded py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};
