import React from "react";

export const WordListing: React.FC<{
  frenchWord: string;
  arabicWord: string;
}> = ({ frenchWord, arabicWord }) => {
  return (
    <div className="flex content-center border-b p-2 justify-between w-11/12 md:w-1/2 lg:w-1/2">
      <div>{arabicWord}</div>
      <div>{frenchWord}</div>
    </div>
  );
};
