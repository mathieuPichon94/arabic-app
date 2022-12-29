import type { GetServerSideProps } from "next";
import { Card } from "@/components/Card";

import { openArabicVoc, shuffle } from "@/server/utils";
import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type wordToTest = { arab: string; french: string };

const Quizz: React.FC<{
  wordsToTest: wordToTest[];
}> = ({ wordsToTest }) => {
  const currentIndexWord = useSelector(
    (state: RootState) => state.currentIndexWord.value
  );
  const maxIndexWord = useSelector(
    (state: RootState) => state.maxIndexWordReducer.value
  );

  let shouldShowTranslation = false;
  if (currentIndexWord < maxIndexWord) {
    shouldShowTranslation = true;
  }

  const wordToTest = wordsToTest[currentIndexWord];

  return (
    <div>
      <div className="h-screen w-screen flex flex-col justify-around items-center relative">
        <h1 className="text-2xl font-bold">Lets start the quizz</h1>
        <Card
          wordToTest={wordToTest}
          shouldShowTranslation={shouldShowTranslation}
        />
      </div>
    </div>
  );
};

export const getStaticProps: GetServerSideProps = async () => {
  const arabicVoc = await openArabicVoc();
  return { props: { wordsToTest: shuffle(arabicVoc) } };
};

export default Quizz;
