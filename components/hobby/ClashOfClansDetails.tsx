import Image from "next/image";
import type { ClashOfClansDetails } from "@/data/topGameItems";
import CopyableId from "./CopyableId";

type HallCardProps = {
  label: string;
  hall: ClashOfClansDetails["townHall"];
};

const HallCard = ({ label, hall }: HallCardProps) => (
  <div>
    <p className="text-sm font-semibold text-primary-400">{label}</p>
    <div className="group mt-3 overflow-hidden rounded-xl border border-[#33353F]">
      <div className="relative aspect-square bg-[#121212]">
        <Image
          src={hall.image}
          alt={`${hall.level} image`}
          fill
          className="object-contain transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <div className="px-4 py-3 text-center">
        <p className="text-xs text-[#ADB7BE]">{hall.name}</p>
        <p className="font-semibold">{hall.level}</p>
      </div>
    </div>
  </div>
);

const ClashOfClansDetails = ({ details }: { details: ClashOfClansDetails }) => {
  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2fr)_minmax(0,0.8fr)]">
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        <HallCard label="Town Hall" hall={details.townHall} />
        <HallCard label="Builder Hall" hall={details.builderHall} />
      </section>

      <section className="flex h-full flex-col">
        <p className="text-sm font-semibold text-primary-400">My Village</p>
        <div className="group relative mx-auto mt-3 h-64 min-h-64 w-11/12 flex-1 overflow-hidden rounded-xl border border-[#33353F] bg-[#121212] sm:h-80 md:w-3/4 md:h-[clamp(32rem,65vw,40rem)] lg:w-11/12 lg:h-auto">
          <Image
            src={details.villageImage}
            alt="Clash of Clans village"
            fill
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>
        <div className="mt-6 border-t border-[#33353F] pt-6">
          <p className="text-sm font-semibold text-primary-400">
            Builder Hall Villages
          </p>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {details.builderVillageImages.slice(0, 2).map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="group relative mx-auto aspect-video w-11/12 overflow-hidden rounded-xl border border-[#33353F] bg-[#121212]"
              >
                <Image
                  src={image}
                  alt={`Builder Hall village layout ${index + 1}`}
                  fill
                  className="object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex h-full flex-col">
        <p className="text-sm font-semibold text-primary-400">Leagues</p>
        <div className="mt-3 grid grid-cols-2 gap-3 lg:flex-[2] lg:grid-cols-1 lg:grid-rows-2">
          {[
            ["Current League", details.currentLeague],
            ["Highest League", details.highestLeague],
          ].map(([label, league]) => {
            const leagueInfo = league as ClashOfClansDetails["currentLeague"];

            return (
              <div
                key={label as string}
                className="group flex min-h-0 flex-col items-center rounded-xl border border-[#33353F] p-3 lg:h-full"
              >
                <div className="relative min-h-16 w-full flex-1 sm:min-h-20 lg:min-h-0">
                  <Image
                    src={leagueInfo.image}
                    alt={`${label} ${leagueInfo.name}`}
                    fill
                    className="object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                </div>
                <p className="mt-2 text-center text-xs text-[#ADB7BE]">
                  {label as string}
                </p>
                <p className="text-center text-sm font-semibold">
                  {leagueInfo.name}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex lg:flex-1 flex-col border-t border-[#33353F] pt-4">
          <p className="text-sm font-semibold text-primary-400">Current Clan</p>
          {details.clanBannerImage && (
            <div className="group relative mt-3 min-h-24 w-full flex-1 overflow-hidden rounded-lg border border-[#33353F] bg-[#121212]">
              <div className="relative mx-auto h-full w-full max-w-40">
                <Image
                  src={details.clanBannerImage}
                  alt={`${details.clanName} banner`}
                  fill
                  className="object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          )}
          <p className="mt-2 text-lg text-[#ADB7BE]">
            Clan Name: <span className="font-semibold text-white">{details.clanName}</span>
          </p>
          <CopyableId
            label="Clan Tag"
            value={details.clanTag}
            className="mt-1"
          />
        </div>
      </section>
    </div>
  );
};

export default ClashOfClansDetails;
