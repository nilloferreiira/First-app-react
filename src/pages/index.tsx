import { Links } from "@/components/Links";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center m-5 gap-10">
      <h1 className="text-gray-100 text-5xl"> HOME</h1>
      <div className="flex rounded-lg bg-purple-500 w-2/5">
        <div className="flex flex-1">
          <Links />
        </div>
      </div>
    </div>
  );
}
