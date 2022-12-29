import type { GetServerSideProps } from "next";
import { Card } from "@/components/Card";

import { openArabicVoc } from "@/server/utils";
import React from "react";

type wordToTest = { arab: string; french: string };

const Quizz: React.FC<{
  wordsToTest: wordToTest[];
}> = ({ wordsToTest }) => {
  return (
    <div>
      <div className="h-screen w-screen flex flex-col justify-around items-center relative">
        <h1 className="text-2xl font-bold">Lets start the quizz</h1>
        <Card wordsToTest={wordsToTest} />
      </div>
    </div>
  );
};

export default Quizz;

export const getStaticProps: GetServerSideProps = async () => {
  const arabicVoc = await openArabicVoc();
  return { props: { wordsToTest: arabicVoc } };
};
