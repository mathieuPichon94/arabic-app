import { Card } from "@/components/Card";

const btn =
  "inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-around items-center relative">
      <h1 className="text-3xl font-bold underline">Welcome to arabice test</h1>
      <Card
        frenchWord={"lol"}
        showAnswer={() => {
          console.log("test");
        }}
      />
      <div className="flex flex-row justify-around items-center">
        <button className={btn} onClick={() => console.log("lol")}>
          Previous
        </button>
        <button className={btn} onClick={() => console.log("lol")}>
          Show
        </button>
        <button className={btn} onClick={() => console.log("lol")}>
          Next
        </button>
      </div>
    </div>
  );
}
