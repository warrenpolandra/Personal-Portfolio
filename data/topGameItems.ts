export type GameImage = {
  name: string;
  image: string;
  url?: string;
};

export type ClashOfClansDetails = {
  townHall: GameImage & { level: string };
  builderHall: GameImage & { level: string };
  builderVillageImages: string[];
  villageImage: string;
  clanName: string;
  clanTag: string;
  playerTag: string;
  clanBannerImage?: string;
  currentLeague: GameImage;
  highestLeague: GameImage;
};

export type TopGameItem = {
  rank: number;
  title: string;
  logo: string;
  gameUrl?: string;
  riotId?: string;
  description?: string;
  moneySpentUsd?: number | null;
  favoriteEsportsTeam?: GameImage;
  featuredCharacter?: GameImage & {
    label: string;
    portrait?: boolean;
  };
  favoriteSkins?: GameImage[];
  favoriteWeapons?: GameImage[];
  currentRank?: GameImage;
  highestRank?: GameImage;
  clashOfClans?: ClashOfClansDetails;
};

export const topGameItems: TopGameItem[] = [
  {
    rank: 1,
    title: "Valorant",
    logo: "./images/games/valorant/valorant.svg",
    gameUrl: "https://playvalorant.com/en-us/",
    riotId: "Menendez#Raul",
    description: "Been playing this game since 2020. It has brought me equal parts tears, joy, and questionable life choices. It may be free-to-play, but my sanity has been paying the price ever since.",
    moneySpentUsd: 177,
    favoriteEsportsTeam: {
      name: "Paper Rex (PRX)",
      image: "./images/games/valorant/prx.jpg",
      url: "https://pprx.team/",
    },
    featuredCharacter: {
      label: "Most Used Agent",
      name: "Sova",
      image: "./images/games/valorant/sova.webp",
    },
    favoriteSkins: [
      { name: "RGX 11z Pro Firefly", image: "./images/games/valorant/rgx-butterfly.png" },
      { name: "Reaver Vandal", image: "./images/games/valorant/reaver-vandal.webp" },
      { name: "Prime//2.0 Phantom", image: "./images/games/valorant/prime-phantom.png" },
    ],
    currentRank: {
      name: "Unranked",
      image: "./images/games/valorant/unranked.webp",
    },
    highestRank: {
      name: "Platinum 1",
      image: "./images/games/valorant/platinum-1.svg",
    },
  },
  {
    rank: 2,
    title: "Apex Legends",
    logo: "./images/games/apex-legends/apex-legends.png",
    gameUrl: "https://store.steampowered.com/app/1172470/Apex_Legends/",
    description: "I started playing in 2026 when I lived in Japan, where everyone played this game. Valkyrie is the only Legend that I can use, so don't expect much from me when we play together :)",
    featuredCharacter: {
      label: "Most Used Legend",
      portrait: true,
      name: "Valkyrie",
      image: "./images/games/apex-legends/valkryie.webp",
    },
    favoriteWeapons: [
      { name: "Hemlok Burst AR", image: "./images/games/apex-legends/hemlok.png" },
      { name: "C.A.R. SMG", image: "./images/games/apex-legends/car.png" },
    ],
    currentRank: {
      name: "Gold 4",
      image: "./images/games/apex-legends/gold-4.png",
    },
    highestRank: {
      name: "Gold 4",
      image: "./images/games/apex-legends/gold-4.png",
    },
  },
  {
    rank: 3,
    title: "Clash of Clans",
    logo: "./images/games/clash-of-clans/coc-logo.png",
    gameUrl: "https://supercell.com/en/games/clashofclans/",
    clashOfClans: {
      townHall: {
        level: "Town Hall 16",
        name: "Town Hall",
        image: "./images/games/clash-of-clans/th-16.webp",
      },
      builderHall: {
        level: "Builder Hall 10",
        name: "Builder Hall",
        image: "./images/games/clash-of-clans/bh-10.webp",
      },
      builderVillageImages: [
        "./images/games/clash-of-clans/builder-village-1.PNG",
        "./images/games/clash-of-clans/builder-village-2.PNG",
      ],
      villageImage: "./images/games/clash-of-clans/village.PNG",
      clanName: "CCC",
      clanTag: "#2RJ9RGGY9",
      playerTag: "#2GJCJL2YU",
      clanBannerImage: "./images/games/clash-of-clans/clan-banner.png",
      currentLeague: {
        name: "Dragon 29",
        image: "./images/games/clash-of-clans/dragon-league.png",
      },
      highestLeague: {
        name: "Dragon 29",
        image: "./images/games/clash-of-clans/dragon-league.png",
      },
    },
  },
];
