"use client";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer p-12 flex justify-center w-full border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <p className="text-center text-slate-600">
        <span className="whitespace-nowrap">
          Copyright {currentYear} © Warren Gerald Polandra.
        </span>{" "}
        <span className="whitespace-nowrap">All rights reserved</span>
      </p>
    </footer>
  );
};
export default Footer;
