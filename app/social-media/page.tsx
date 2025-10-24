import Navbar from "@/components/nav/Navbar";
import { socialMediaItems } from "@/data/socialMediaItems";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const SocialMediaPage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar />
      <div className="flex flex-col px-8 mb-4 mx-auto w-full max-w-8xl">
        <div className="flex w-full items-center justify-center border-b-primary pt-20 lg:pt-28 pb-8">
          <h1 className="text-white text-2xl md:text-3xl font-bold text-center">
            Want to connect? Here are my social media!
          </h1>
        </div>
        {socialMediaItems.map((category, index) => (
          <div className="flex flex-col w-full my-4" key={index}>
            <h2 className="text-white text-xl md:text-2xl font-bold">
              {category.name}
            </h2>
            <hr className="my-4 border-t-2 border-primary-500" />
            <div className="flex flex-row flex-wrap align-center gap-12">
              {category.mediaList.map((media, idx) => (
                <Link
                  href={media.link || ""}
                  target={media.link ? "_blank" : undefined}
                  rel={media.link ? "noopener noreferrer" : undefined}
                  key={idx}
                  className="flex flex-col justify-center items-center hover:scale-105 transition-transform"
                >
                  <div className="relative aspect-square w-[80px] md:w-[120px]">
                    <Image
                      src={`/images/socials/${media.imgPath}`}
                      alt={media.name}
                      fill
                    />
                  </div>
                  <h3 className="text-white mt-2">{media.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SocialMediaPage;
