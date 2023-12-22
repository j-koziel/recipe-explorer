"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonStar, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Switch
        defaultSelected={false}
        size="lg"
        color="primary"
        startContent={<Sun />}
        endContent={<MoonStar />}
        onChange={(e) => {
          e.preventDefault();
          theme == "light" ? setTheme("dark") : setTheme("light");
        }}
      />
    </div>
  );
}
