"use client";
import { useState } from "react";
import Image from "next/image";
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
            icon="🎮"
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
            icon="😴"
            title="Sleeping"
            description="Is sleeping also a hobby?"
            isOpen={openHobby === "hobby-2"}
            onToggle={() => toggleHobby("hobby-2")}
          >
            <div className="pb-6">
              <div className="relative mx-auto h-64 w-full max-w-md overflow-hidden rounded-xl">
                <Image
                  src="./images/hobbies/sleeping.png"
                  alt="Sleeping"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mx-auto mt-5 max-w-2xl text-center text-[#ADB7BE]">
                Yes, I do sleep a lot when I have the time. After a busy week, I
                can sleep up to 12 hours on weekends. Albert Einstein sleeps 10
                hours every night and he has an IQ of 160. Naturally, I take this
                as proof that more sleep equals more brainpower.
              </p>
            </div>
          </HobbyDropdown>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <HobbyDropdown
            icon="🍖"
            title="Eating lots of food"
            description="More food adventures coming soon."
            isOpen={openHobby === "eating"}
            onToggle={() => toggleHobby("eating")}
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
