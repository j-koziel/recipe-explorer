import { cookies } from "next/headers";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <h1>Welcome to recipe explorer</h1>
      </div>
      <form className="animate-in flex flex-col gap-4 items-center w-screen">
        <input
          type="text"
          placeholder="Pizza? Or maybe some lasagna? Make your pick..."
          className="w-1/2 text-center rounded-md h-7 bg-inherit border"
          autoFocus
        />
        <button className="bg-green-700 w-fit p-2 rounded-md" type="submit">
          Search for a recipe
        </button>
      </form>
    </div>
  );
}
