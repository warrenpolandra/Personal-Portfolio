import Footer from "@/components/Footer";
import GamesSection from "@/components/hobby/GamesSection";
import TopGamesSection from "@/components/hobby/TopGamesSection";
import Navbar from "@/components/nav/Navbar";

const HobbyPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <section className="w-full px-4 pb-12 pt-28 text-center text-white sm:px-8 sm:pt-32">
        <h1 className="text-3xl font-bold sm:text-5xl">My Hobbies</h1>
        <p className="mt-4 text-[#ADB7BE] sm:text-lg">
          A glimpse of what I enjoy outside of research and software development.
        </p>
      </section>
      <TopGamesSection />
      <GamesSection />
      <Footer />
    </main>
  );
};

export default HobbyPage;
