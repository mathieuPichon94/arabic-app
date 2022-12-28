import type React from "react";
import Link from "next/link";

const teamStyle =
  "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
export default function Card() {
  return (
    <div className="flex flex-col justify-between items-center w-200">
      <Link href="/" className={teamStyle} aria-current={true}>
        Back To Menu
      </Link>
    </div>
  );
}
