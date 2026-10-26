type GameImage = {
  name: string;
  image: string;
  url?: string;
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
  };
  favoriteSkins?: GameImage[];
  currentRank?: GameImage;
  highestRank?: GameImage;
};

export const topGameItems: TopGameItem[] = [
  {
    rank: 1,
    title: "Valorant",
    logo: "./images/games/valorant/valorant.svg",
    gameUrl: "https://playvalorant.com/en-us/",
    riotId: "Menendez#Raul",
    description: "I’ve been playing Valorant since 2020. It has brought me equal parts tears, joy, and questionable life choices. It may be free-to-play, but my sanity has been paying the price ever since.",
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
    title: "Game Title",
    logo: "./images/games/placeholders/game-logo.svg",
  },
  {
    rank: 3,
    title: "Game Title",
    logo: "./images/games/placeholders/game-logo.svg",
  },
];
