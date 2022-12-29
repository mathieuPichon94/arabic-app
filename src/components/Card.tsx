import type React from "react";
import { useState } from "react";
import { Button } from "@/components/Button";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/utils/slice/indexWordSlice";

type CardProps = {
  wordsToTest: { arab: string; french: string }[];
};

export const Card: React.FC<CardProps> = ({ wordsToTest }) => {
  const [showWord, setShowWord] = useState(false);
  const [indexWord, setIndexWord] = useState(0);
  const wordToTest = wordsToTest[indexWord];
  const dispatch = useDispatch();

  return (
    <div className="block p-4 rounded-lg shadow-lg bg-white w-11/12 md:w-1/3 lg:w-1/3">
      <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 text-center pb-10">
        Translate the word
      </h5>
      <div className="flex justify-between pb-10">
        <p className="text-gray-700 text-base">{wordToTest.french}</p>
        {showWord && (
          <p className="text-gray-700 text-base">{wordToTest.arab}</p>
        )}
      </div>
      <div className="flex justify-around">
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
            dispatch(increment());
          }}
          intent={showWord ? "success" : "disabled"}
          disabled={!showWord}
        />
      </div>
    </div>
  );
};
