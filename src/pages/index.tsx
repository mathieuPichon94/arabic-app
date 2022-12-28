import { trpc } from "@/utils/trpc";

export default function Home() {
  const hello = trpc.hello.useQuery({ text: "glol" });
  const word = trpc.getWord.useQuery();
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 className="text-4xl mb-8 text-center">Welcome to arabic test</h1>
    </div>
  );
}
