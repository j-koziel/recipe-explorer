import { Divider, Link } from "@nextui-org/react";
import { menuItems } from "@/utils/menu-items";

export function Footer() {
  return (
    <div className="w-full h-screen text-center">
      <Divider />
      <h1 className="text-9xl">Recipe Explorer</h1>
      <div className="flex h-[80%] justify-between items-center p-4">
        {menuItems.map((menuItem, i) => (
          <Link key={i} href="#" color="foreground" className="text-4xl">
            {menuItem}
          </Link>
        ))}
      </div>
    </div>
  );
}
