/* eslint-disable @next/next/no-img-element */
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

import { SearchIcon, UserIcon } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 md:backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" prefetch={false}>
           <span className="w-10 h-10" ><img src="/fv.png" alt="" className="w-10 h-10" /></span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-primary-foreground hover:text-primary" prefetch={false}>
              Home
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-primary" prefetch={false}>
              Anime
            </Link>
            {/* <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
              Movies
            </Link> */}
            <Link href="https://discord.com/invite/yyAmspWrNP" className="text-muted-foreground hover:text-primary" prefetch={false} target="_blank">
              Community/Discord
            </Link>
          </nav>
          <div className="flex items-center gap-2">
         
            <SearchBar/>
            <ModeToggle />
          </div>
        </div>
      </header>
  );
}
