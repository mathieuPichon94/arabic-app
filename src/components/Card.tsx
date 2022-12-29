import type React from "react";
import { useState } from "react";
import { Button } from "@/components/Button";

import { useDispatch } from "react-redux";
import { decrement, increment } from "@/utils/slice/currentIndexWordSlice";
import { incrementMax } from "@/utils/slice/maxIndexWordSlice";

type CardProps = {
  wordToTest: { arab: string; french: string };
  shouldShowTranslation: boolean;
};

export const Card: React.FC<CardProps> = ({
  wordToTest,
  shouldShowTranslation,
}) => {
  const [showWord, setShowWord] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="block p-4 rounded-lg shadow-lg bg-white w-11/12 md:w-1/3 lg:w-1/3">
      <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 text-center pb-10">
        Translate the word
      </h5>
      <div className="flex justify-between pb-10">
        <p className="text-gray-700 text-base">{wordToTest.french}</p>
        {(shouldShowTranslation || showWord) && (
          <p className="text-gray-700 text-base">{wordToTest.arab}</p>
        )}
      </div>
      <div className="flex justify-around">
        <Button
          text={"Previous"}
          onClickButton={() => {
            dispatch(decrement());
          }}
          intent={"danger"}
        />
        <Button
          text={"Show"}
          onClickButton={() => {
            dispatch(incrementMax());
            setShowWord(true);
          }}
          intent={"primary"}
        />

        <Button
          text={"Next"}
          onClickButton={() => {
            dispatch(increment());
            setShowWord(false);
          }}
          intent={shouldShowTranslation || showWord ? "success" : "disabled"}
          disabled={!(shouldShowTranslation || showWord)}
        />
      </div>
    </div>
  );
};
