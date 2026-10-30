export type FoodItem = {
  rank: number;
  name: string;
  image?: string;
};

export type FoodCategory = {
  id: string;
  country: string;
  flag: string;
  foods: FoodItem[];
};

export const foodCategories: FoodCategory[] = [
  {
    id: "indonesian",
    country: "Indonesian",
    flag: "./images/hobbies/flags/indonesia.png",
    foods: [
      {
        rank: 1,
        name: "Babi Guling",
        image: "./images/hobbies/food/indonesian/babi-guling.jpg",
      },
      {
        rank: 2,
        name: "Nasi Padang",
        image: "./images/hobbies/food/indonesian/nasi-padang.jpg",
      },
      {
        rank: 3,
        name: "Mie Ayam",
        image: "./images/hobbies/food/indonesian/mie-ayam.jpg",
      },
    ],
  },
  {
    id: "japanese",
    country: "Japanese",
    flag: "./images/hobbies/flags/japan.png",
    foods: [
      {
        rank: 1,
        name: "Unagi",
        image: "./images/hobbies/food/japanese/unagi.jpg",
      },
      {
        rank: 2,
        name: "Tsukemen",
        image: "./images/hobbies/food/japanese/tsukemen.jpg",
      },
      {
        rank: 3,
        name: "Tonkatsu",
        image: "./images/hobbies/food/japanese/tonkatsu.jpg",
      },
    ],
  },
  {
    id: "italian",
    country: "Italian",
    flag: "./images/hobbies/flags/italy.png",
    foods: [
      {
        rank: 1,
        name: "Pizza",
        image: "./images/hobbies/food/italian/pizza.jpg",
      },
      {
        rank: 2,
        name: "Lasagna",
        image: "./images/hobbies/food/italian/lasagna.jpg",
      },
      {
        rank: 3,
        name: "Tiramisu",
        image: "./images/hobbies/food/italian/tiramisu.jpg",
      },
    ],
  },
];
