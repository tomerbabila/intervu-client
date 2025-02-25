import { useState, useEffect } from "react";
import { Sun, Moon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-background border-b">
      {/* Left: App Title */}
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
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-6">
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
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
