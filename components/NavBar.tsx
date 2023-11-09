import AuthButton from "./AuthButton";

export default function NavBar() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <a className="hover:underline text-xl font-bold" href="/">
          Recipe Explorer
        </a>
        <AuthButton />
      </div>
    </nav>
  );
}
