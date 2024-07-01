/* eslint-disable @next/next/no-img-element */
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { SearchIcon, UserIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary" prefetch={false}>
            Jhakkass Anime
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-primary-foreground hover:text-primary" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
              Anime
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
              Movies
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
              Community
            </Link>
          </nav>
          <div className="flex items-center gap-2">
         
            <Button variant="ghost" size="icon" className="rounded-full">
              <Link href='/search'>
              <SearchIcon className="w-5 h-5" />
              <span className="sr-only">Search</span></Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>
  );
}
