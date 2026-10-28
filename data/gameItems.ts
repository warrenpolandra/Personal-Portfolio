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
    image: "./images/hobbies/games/stardew-valley.png",
    gameUrl: "https://store.steampowered.com/app/413150/Stardew_Valley/"
  },
  {
    id: "sifu",
    title: "Sifu",
    image: "./images/hobbies/games/sifu.ico",
    gameUrl: "https://store.steampowered.com/app/2138710/Sifu/"
  },
  {
    id: "peak",
    title: "Peak",
    image: "./images/hobbies/games/peak.png",
    gameUrl: "https://store.steampowered.com/app/3527290/PEAK/"
  },
  {
    id: "mindustry",
    title: "Mindustry",
    image: "./images/hobbies/games/mindustry.png",
    gameUrl: "https://store.steampowered.com/app/1127400/Mindustry/"
  },
  {
    id: "pokemon-tcgp",
    title: "Pokemon TCGP",
    image: "./images/hobbies/games/pokemon-tcgp.jpg",
    gameUrl: "https://tcgpocket.pokemon.com/en-us/"
  },
  {
    id: "gta-v",
    title: "GTA V",
    image: "./images/hobbies/games/gta-v.png",
    gameUrl: "https://store.steampowered.com/app/3240220/Grand_Theft_Auto_V_Enhanced/"
  },
];
