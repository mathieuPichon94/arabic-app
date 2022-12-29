import { promises as fs } from "fs";

export const openArabicVoc = async () => {
  const fileContents = await fs.readFile("public/arabicVoc.json", "utf8");
  return JSON.parse(fileContents);
};
