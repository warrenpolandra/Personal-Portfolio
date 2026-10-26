import Image from "next/image";
import { topGameItems } from "@/data/topGameItems";

const formatUsd = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

const TopGamesSection = () => {
  return (
    <section className="w-full px-4 pb-12 sm:px-8">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">Top Games</h2>
      <div className="mt-6 space-y-6">
        {topGameItems.map((game) => {
          const ranks = [
            game.currentRank && { label: "Current Rank", ...game.currentRank },
            game.highestRank && { label: "Highest Rank", ...game.highestRank },
          ].filter((rank): rank is { label: string; name: string; image: string } =>
            Boolean(rank)
          );
          const hasMiddleContent = Boolean(
            game.description ||
              game.moneySpentUsd !== undefined ||
              game.favoriteEsportsTeam ||
              game.favoriteSkins?.length ||
              game.favoriteWeapons?.length
          );
          const detailCount =
            Number(Boolean(game.featuredCharacter)) +
            Number(hasMiddleContent) +
            Number(Boolean(ranks.length));
          const gridColumns =
            detailCount === 1
              ? "max-w-md"
              : detailCount === 2
                ? "lg:grid-cols-2"
                : "lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)_minmax(0,0.8fr)]";

          return (
            <article
              key={game.rank}
              className="w-full rounded-2xl border border-[#33353F] bg-[#181818] p-5 text-white sm:p-8"
            >
              <header className="flex flex-col gap-4 border-b border-[#33353F] pb-5 sm:flex-row sm:items-center">
                <span className="text-4xl font-bold tabular-nums text-primary-500/60">
                  #{game.rank}
                </span>
                <div className="flex items-center gap-2">
                  <div className="relative h-16 w-16 shrink-0">
                    <Image
                      src={game.logo}
                      alt={`${game.title} logo`}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold sm:text-3xl">
                    {game.gameUrl ? (
                      <a
                        href={game.gameUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-300 hover:underline"
                      >
                        {game.title}
                      </a>
                    ) : (
                      game.title
                    )}
                  </h3>
                </div>
                {game.riotId && (
                  <p className="text-lg text-[#ADB7BE] sm:ml-auto">
                    Riot ID: <span className="font-semibold text-white">{game.riotId}</span>
                  </p>
                )}
              </header>

              {detailCount === 0 ? (
                <p className="pt-6 text-[#ADB7BE]">Details coming soon.</p>
              ) : (
                <div className={`mt-6 grid gap-6 ${gridColumns}`}>
                  {game.featuredCharacter && (
                    <section className="flex h-full flex-col">
                      <p className="text-sm font-semibold text-primary-400">
                        {game.featuredCharacter.label}
                      </p>
                      <div className="group mt-3 flex flex-1 flex-col overflow-hidden rounded-xl border border-[#33353F]">
                        <div
                          className={`relative min-h-64 flex-1 overflow-hidden ${
                            game.featuredCharacter.portrait
                              ? "mx-auto w-full max-w-48"
                              : ""
                          }`}
                        >
                          <Image
                            src={game.featuredCharacter.image}
                            alt={`${game.featuredCharacter.name} image`}
                            fill
                            className="bg-[#121212] object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                          />
                        </div>
                        <p className="px-4 py-3 text-center text-lg font-semibold">
                          {game.featuredCharacter.name}
                        </p>
                      </div>
                    </section>
                  )}

                  {hasMiddleContent && (
                    <section className="space-y-6">
                      {(game.description || game.moneySpentUsd !== undefined) && (
                        <div>
                          <p className="text-sm font-semibold text-primary-400">
                            Why I Like This Game
                          </p>
                          <p className="mt-2 text-[#ADB7BE]">
                            {game.description ?? "Add a short description."}
                          </p>
                          {game.moneySpentUsd !== undefined && (
                            <div className="mt-4 flex items-end justify-between gap-3 border-t border-[#33353F] pt-4">
                              <p className="text-sm font-semibold text-primary-400">
                                Money Spent (USD)
                              </p>
                              <p className="text-xl font-bold">
                                {typeof game.moneySpentUsd === "number"
                                  ? `~${formatUsd(game.moneySpentUsd)}`
                                  : "TBD"}
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      {game.favoriteSkins && game.favoriteSkins.length > 0 && (
                        <div className="border-t border-[#33353F] pt-4">
                          <p className="text-sm font-semibold text-primary-400">
                            Favorite Skins
                          </p>
                          <div className="mt-3 space-y-2">
                            {game.favoriteSkins.slice(0, 3).map((skin, index) => (
                              <div
                                key={`${skin.name}-${index}`}
                                className="group flex items-center gap-3 rounded-lg border border-[#33353F] p-2"
                              >
                                <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded">
                                  <Image
                                    src={skin.image}
                                    alt={`${skin.name} image`}
                                    fill
                                    className="bg-[#121212] object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                                  />
                                </div>
                                <p className="truncate text-sm font-semibold">
                                  {skin.name}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {game.favoriteWeapons &&
                        game.favoriteWeapons.length > 0 && (
                          <div className="border-t border-[#33353F] pt-4">
                            <p className="text-sm font-semibold text-primary-400">
                              Favorite Weapons
                            </p>
                            <div className="mt-3 space-y-2">
                              {game.favoriteWeapons.slice(0, 2).map((weapon, index) => (
                                <div
                                  key={`${weapon.name}-${index}`}
                                  className="group flex items-center gap-3 rounded-lg border border-[#33353F] p-2"
                                >
                                  <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded">
                                    <Image
                                      src={weapon.image}
                                      alt={`${weapon.name} image`}
                                      fill
                                      className="bg-[#121212] object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                                    />
                                  </div>
                                  <p className="truncate text-sm font-semibold">
                                    {weapon.name}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </section>
                  )}

                  {ranks.length > 0 && (
                    <section className="flex h-full flex-col">
                      <p className="text-sm font-semibold text-primary-400">
                        Ranks
                      </p>
                      <div className="mt-3 flex flex-1 flex-col gap-3">
                        {ranks.map((rank) => (
                          <div
                            key={rank.label}
                            className="group flex flex-1 flex-col items-center justify-center rounded-xl border border-[#33353F] p-3"
                          >
                            <div className="relative h-16 w-16 sm:h-20 sm:w-20">
                              <Image
                                src={rank.image}
                                alt={`${rank.label} ${rank.name}`}
                                fill
                                className="object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                              />
                            </div>
                            <p className="mt-2 text-center text-xs text-[#ADB7BE]">
                              {rank.label}
                            </p>
                            <p className="text-center text-sm font-semibold">
                              {rank.name}
                            </p>
                          </div>
                        ))}
                      </div>
                      {game.favoriteEsportsTeam && (
                        <a
                          href={game.favoriteEsportsTeam.url}
                          target={
                            game.favoriteEsportsTeam.url ? "_blank" : undefined
                          }
                          rel={
                            game.favoriteEsportsTeam.url
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="group mt-4 flex items-center justify-start gap-4 border-t border-[#33353F] pt-4"
                        >
                          <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                            <Image
                              src={game.favoriteEsportsTeam.image}
                              alt={`${game.favoriteEsportsTeam.name} logo`}
                              fill
                              className="object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                            />
                          </div>
                          <div>
                            <p className="text-xs text-[#ADB7BE]">
                              Favorite Esports Team
                            </p>
                            <p className="font-semibold group-hover:text-primary-300 group-hover:underline">
                              {game.favoriteEsportsTeam.name}
                            </p>
                          </div>
                        </a>
                      )}
                    </section>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TopGamesSection;
