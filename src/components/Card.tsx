import type React from "react";
import { useState } from "react";
import { Button } from "@/components/Button";

export const Card: React.FC<{
  frenchWord: string;
  showAnswer: () => void;
}> = (props) => {
  const [showWord, setShowWord] = useState(false);
  return (
    <div className="flex justify-center w-screen">
      <div className="block p-6 rounded-lg shadow-lg bg-white w-1/3">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          Card title
        </h5>
        <div className="flex justify-between">
          <p className="text-gray-700 text-base mb-4">{"compter"}</p>
          {showWord && (
            <p className="text-gray-700 text-base mb-4">{props.frenchWord}</p>
          )}
        </div>
        <Button
          text={"show"}
          onClickButton={() => {
            console.log("hello");
          }}
          intent={"success"}
        />
      </div>
    </div>
  );
};
