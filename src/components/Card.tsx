import type React from "react";
import { useState } from "react";
import { Button } from "@/components/Button";

type wordToTest = { arab: string; french: string };
type CardProps = {
  wordsToTest: wordToTest[];
};

export const Card: React.FC<CardProps> = ({ wordsToTest }) => {
  const [showWord, setShowWord] = useState(false);
  const [indexWord, setIndexWord] = useState(0);
  const wordToTest = wordsToTest[indexWord];

  return (
    <div className="flex justify-center w-screen">
      <div className="block p-6 rounded-lg shadow-lg bg-white w-1/3">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 text-center pb-10">
          Translate the word
        </h5>
        <div className="flex justify-between">
          <p className="text-gray-700 text-base mb-4">{wordToTest.french}</p>
          {showWord && (
            <p className="text-gray-700 text-base mb-4">{wordToTest.arab}</p>
          )}
        </div>
        <div className="p-2 flex flex-row justify-around">
          <Button
            text={"Previous"}
            onClickButton={() => {
              if (indexWord > 0) {
                setIndexWord(indexWord - 1);
                setShowWord(true);
              }
            }}
            intent={"danger"}
          />
          <Button
            text={"Show"}
            onClickButton={() => {
              setShowWord(true);
            }}
            intent={"primary"}
          />

          <Button
            text={"Next"}
            onClickButton={() => {
              setShowWord(!showWord);
              setIndexWord(indexWord + 1);
            }}
            intent={showWord ? "success" : "disabled"}
            disabled={!showWord}
          />
        </div>
      </div>
    </div>
  );
};
