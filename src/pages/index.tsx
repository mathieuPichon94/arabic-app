import { Card } from "@/components/Card";
import NavBar from "@/components/NavBar";
import { trpc } from "@/utils/trpc";

const btn =
  "inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

export default function Home() {
  const hello = trpc.hello.useQuery({ text: "glol" });
  const word = trpc.getWord.useQuery();
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <NavBar />
      <div className="h-screen w-screen flex flex-col justify-around items-center relative">
        <h1 className="text-3xl font-bold underline">
          Welcome to arabice test
        </h1>
        <Card
          frenchWord={word.data?.arabicWord || "lol"}
          showAnswer={() => {
            console.log("حَسَبَ / يَحْسُبُ");
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
    </div>
  );
}
