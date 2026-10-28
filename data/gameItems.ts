export type GameItem = {
  id: string;
  title: string;
  image: string;
  gameUrl?: string;
};

export const otherGameItems: GameItem[] = [
  {
    id: "stardew-valley",
    title: "Stardew Valley",
    image: "./images/games/stardew-valley.png",
    gameUrl: "https://store.steampowered.com/app/413150/Stardew_Valley/"
  },
  {
    id: "sifu",
    title: "Sifu",
    image: "./images/games/sifu.ico",
    gameUrl: "https://store.steampowered.com/app/2138710/Sifu/"
  },
  {
    id: "peak",
    title: "Peak",
    image: "./images/games/peak.png",
    gameUrl: "https://store.steampowered.com/app/3527290/PEAK/"
  },
  {
    id: "mindustry",
    title: "Mindustry",
    image: "./images/games/mindustry.png",
    gameUrl: "https://store.steampowered.com/app/1127400/Mindustry/"
  },
  {
    id: "pokemon-tcgp",
    title: "Pokemon TCGP",
    image: "./images/games/pokemon-tcgp.jpg",
    gameUrl: "https://tcgpocket.pokemon.com/en-us/"
  },
  {
    id: "gta-v",
    title: "GTA V",
    image: "./images/games/gta-v.png",
    gameUrl: "https://store.steampowered.com/app/3240220/Grand_Theft_Auto_V_Enhanced/"
  },
];
