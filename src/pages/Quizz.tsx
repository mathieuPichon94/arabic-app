import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { trpc } from "@/utils/trpc";

export default function Quizz() {
  const hello = trpc.hello.useQuery({ text: "glol" });
  const word = trpc.getWord.useQuery();
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="h-screen w-screen flex flex-col justify-around items-center relative">
        <h1 className="text-2xl font-bold">Let's start the quizz</h1>
        <Card
          frenchWord={word.data?.arabicWord || "lol"}
          showAnswer={() => {
            console.log("حَسَبَ / يَحْسُبُ");
          }}
        />
        <div className="flex flex-row w-screen justify-around">
          <Button
            text={"Previous"}
            onClickButton={() => console.log("lol")}
            intent={"secondary"}
          />
          <Button
            text={"Next"}
            onClickButton={() => console.log("lol")}
            intent={"primary"}
          />
        </div>
      </div>
    </div>
  );
}
