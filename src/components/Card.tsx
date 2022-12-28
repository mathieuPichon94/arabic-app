import type React from "react";
import { useState } from "react";

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
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => setShowWord(!showWord)}
        >
          Button
        </button>
      </div>
    </div>
  );
};
