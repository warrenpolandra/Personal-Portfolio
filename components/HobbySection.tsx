import Link from "next/link";

const HobbySection = () => {
  return (
    <section id="hobby" className="py-8 text-white">
      <div className="rounded-2xl border border-[#33353F] bg-[#181818] px-6 py-10 text-center sm:px-10 sm:py-12">
        <h2 className="text-2xl font-bold sm:text-4xl">Hobbies</h2>
        <p className="mx-auto mt-4 max-w-xl text-[#ADB7BE] sm:text-lg">
          Want to know what I do during my free time? Find out here👀
        </p>
        <Link
          href="/hobby"
          className="mt-6 inline-block rounded-full bg-primary-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-600"
        >
          Explore my hobbies →
        </Link>
      </div>
    </section>
  );
};

export default HobbySection;
