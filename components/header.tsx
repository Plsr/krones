import { Crown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <div className="flex justify-between px-2 py-4">
      <div className="flex felx-col items-center gap-4">
        <Crown className="h-4 w-4" />
        Kroner
      </div>
      <ThemeToggle />
    </div>
  );
};
