import type { GetServerSideProps } from "next";
import { Text } from "@mantine/core";
import { createStyles } from "@mantine/core";

import { openArabicVoc, shuffle } from "@/server/utils";
import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { WordCard } from "@/components/WordCard";

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
  const [progression, setProgression] = useState(0);

  let shouldShowTranslation = false;
  if (currentIndexWord < maxIndexWord) {
    shouldShowTranslation = true;
  }

  useEffect(() => {
    setProgression(Math.trunc((maxIndexWord / wordsToTest.length) * 100));
  }, [maxIndexWord, wordsToTest]);

  const wordToTest = wordsToTest[currentIndexWord];

  return (
    <div className={classes.wrapper}>
      <Text>Lets start the quizz</Text>
      <WordCard
        wordToTest={wordToTest}
        shouldShowTranslation={shouldShowTranslation}
        progression={progression}
      ></WordCard>
    </div>
  );
};

export const getStaticProps: GetServerSideProps = async () => {
  const arabicVoc = await openArabicVoc();
  return { props: { wordsToTest: shuffle(arabicVoc) } };
};

export default Quizz;
