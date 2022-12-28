import type { GetServerSideProps } from "next";
import { Card } from "@/components/Card";

import { promises as fs } from "fs";
import { useState } from "react";

type wordToTest = { arab: string; french: string };

const Quizz: React.FC<{
  wordsToTest: wordToTest[];
}> = ({ wordsToTest }) => {
  return (
    <div>
      <div className="h-screen w-screen flex flex-col justify-around items-center relative">
        <h1 className="text-2xl font-bold">Let's start the quizz</h1>
        <Card wordsToTest={wordsToTest} />
      </div>
    </div>
  );
};

export default Quizz;

export const getStaticProps: GetServerSideProps = async () => {
  const fileContents = await fs.readFile("public/arabicVoc.json", "utf8");
  return { props: { wordsToTest: JSON.parse(fileContents) } };
};
