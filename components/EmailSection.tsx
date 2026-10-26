"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const subject = String(formData.get("subject") ?? "");
    const message = String(formData.get("message") ?? "");

    window.location.href = `mailto:warrenpolandra03@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 py-8 gap-4 mt-4 relative border border-t-[#33353F] border-b-transparent border-l-transparent border-r-transparent"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m always looking forward to collaborate, feel free to contact
          me by sending an email. I&apos;ll try my best to reply your message!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="https://github.com/warrenpolandra"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            className="text-white"
          >
            <FaGithub size={40} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/warren-gerald-polandra-a21b07206/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-white"
          >
            <FaLinkedin size={40} />
          </Link>
          <Link
            href="https://www.instagram.com/warren_polandra/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="text-white"
          >
            <FaInstagram size={40} />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="text"
              id="subject"
              required
              placeholder="Greetings"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              maxLength={1500}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full min-h-32 p-2.5"
              placeholder="Hi! Let's collaborate!"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 rounded-lg w-full"
          >
            Send Message
          </button>
          {/* {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">Email sent!</p>
          )} */}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
