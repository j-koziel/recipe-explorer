import { cookies } from "next/headers";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <h1>Welcome to recipe explorer</h1>
      </div>
    </div>
  );
}
