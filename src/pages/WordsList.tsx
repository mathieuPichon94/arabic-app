import type { GetServerSideProps } from "next";

import { openArabicVoc } from "@/server/utils";
import React from "react";
import { SearchingAndFilteringExample } from "@/components/WordListing";

type wordToTest = { arab: string; french: string };
const WordsList: React.FC<{
  wordsToTest: wordToTest[];
}> = ({ wordsToTest }) => {
  return <SearchingAndFilteringExample wordsToTest={wordsToTest} />;
};

export const getStaticProps: GetServerSideProps = async () => {
  const arabicVoc = await openArabicVoc();
  return { props: { wordsToTest: arabicVoc } };
};
export default WordsList;
