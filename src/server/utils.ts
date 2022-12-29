import { promises as fs } from "fs";
import { array } from "zod";

export const openArabicVoc = async () => {
  const fileContents = await fs.readFile("public/arabicVoc.json", "utf8");
  return JSON.parse(fileContents);
};

export const shuffle = (listOfWord: any[]): any[] => {
  let currentIndex = listOfWord.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [listOfWord[currentIndex], listOfWord[randomIndex]] = [
      listOfWord[randomIndex],
      listOfWord[currentIndex],
    ];
  }

  return listOfWord;
};
