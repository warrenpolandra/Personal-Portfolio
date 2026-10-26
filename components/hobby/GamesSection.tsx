import Image from "next/image";
import { otherGameItems } from "@/data/gameItems";

const GamesSection = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-8">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">
        Other Games I Play
      </h2>
      <p className="mt-2 text-[#ADB7BE]">
        A selection of other games I enjoy in my free time.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        {otherGameItems.map((game) => {
          const gameContent = (
            <>
              <div className="p-3 pb-0">
                <div className="relative mx-auto aspect-square w-full max-w-20">
                  <Image
                    src={game.image}
                    alt={`${game.title} game artwork`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="truncate px-3 py-3 text-center font-semibold text-white">
                {game.title}
              </h3>
            </>
          );

          return (
            <article
              key={game.id}
              className="w-32 overflow-hidden rounded-xl border border-[#33353F] bg-[#181818] sm:w-36"
            >
              {game.gameUrl ? (
                <a
                  href={game.gameUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block transition-transform hover:scale-[1.02]"
                >
                  {gameContent}
                </a>
              ) : (
                gameContent
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default GamesSection;
