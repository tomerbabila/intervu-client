import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Icon from "../icon/Icon";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-background border-b">
      <Icon name="intervu" />
      <h1 className="text-xl font-bold">MyApp</h1>

      {/* Center: Desktop Navigation */}
      <nav className="hidden md:flex gap-6">
        <a href="#" className="hover:text-primary">
          Home
        </a>
        <a href="#" className="hover:text-primary">
          About
        </a>
        <a href="#" className="hover:text-primary">
          Contact
        </a>
      </nav>

      {/* Right: Dark Mode Toggle & Mobile Menu */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </Button>

        {/* Mobile Menu */}
      </div>
    </header>
  );
}
