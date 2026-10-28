"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import GamesSection from "@/components/hobby/GamesSection";
import HobbyDropdown from "@/components/hobby/HobbyDropdown";
import TopGamesSection from "@/components/hobby/TopGamesSection";
import Navbar from "@/components/nav/Navbar";

const HobbyPage = () => {
  const [openHobby, setOpenHobby] = useState<string | null>(null);

  const toggleHobby = (hobby: string) => {
    setOpenHobby((current) => (current === hobby ? null : hobby));
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full px-4 pb-12 pt-28 text-center text-white sm:px-8 sm:pt-32"
      >
        <h1 className="text-3xl font-bold sm:text-5xl">My Hobbies</h1>
        <p className="mt-4 text-[#ADB7BE] sm:text-lg">
          A glimpse of what I enjoy outside of research and software development.
        </p>
      </motion.section>
      <div className="w-full flex-1 space-y-4 px-4 pb-12 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <HobbyDropdown
            title="Gaming"
            description="A glimpse of the games I enjoy in my free time."
            isOpen={openHobby === "gaming"}
            onToggle={() => toggleHobby("gaming")}
          >
            <TopGamesSection />
            <GamesSection />
          </HobbyDropdown>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <HobbyDropdown
            title="Hobby 2"
            description="More hobbies coming soon."
            isOpen={openHobby === "hobby-2"}
            onToggle={() => toggleHobby("hobby-2")}
          >
            <p className="pb-6 text-[#ADB7BE]">Content coming soon.</p>
          </HobbyDropdown>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default HobbyPage;
