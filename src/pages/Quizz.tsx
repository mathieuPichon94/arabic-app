import type { GetServerSideProps } from "next";
import { Text } from "@mantine/core";
import { createStyles } from "@mantine/core";

import { openArabicVoc, shuffle } from "@/server/utils";
import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { NewCard } from "@/components/NewCard";

type wordToTest = { arab: string; french: string };

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
}));

const Quizz: React.FC<{
  wordsToTest: wordToTest[];
}> = ({ wordsToTest }) => {
  const { classes } = useStyles();
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
    <div className={classes.wrapper}>
      <Text>Lets start the quizz</Text>
      <NewCard
        wordToTest={wordToTest}
        shouldShowTranslation={shouldShowTranslation}
      ></NewCard>
    </div>
  );
};

export const getStaticProps: GetServerSideProps = async () => {
  const arabicVoc = await openArabicVoc();
  return { props: { wordsToTest: shuffle(arabicVoc) } };
};

export default Quizz;
