import type { GetServerSideProps } from "next";

import { openArabicVoc } from "@/server/utils";
import { WordListing } from "@/components/WordListing";
import React from "react";

type wordToTest = { arab: string; french: string };
const WordsList: React.FC<{
  wordsToTest: wordToTest[];
}> = ({ wordsToTest }) => {
  return (
    <div className="w-screen flex flex-col justify-around items-center">
      <h1 className="text-2xl font-bold text-center">Vocabulary List</h1>
      {wordsToTest.map((el) => {
        return (
          <WordListing
            frenchWord={el.french}
            arabicWord={el.arab}
            key={el.french}
          />
        );
      })}
    </div>
  );
};

export const getStaticProps: GetServerSideProps = async () => {
  const arabicVoc = await openArabicVoc();
  return { props: { wordsToTest: arabicVoc } };
};
export default WordsList;
