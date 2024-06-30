/* eslint-disable @next/next/no-img-element */
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <>
      <nav className="w-full flex justify-between md:px-10 px-2  py-2 shadow-md   bg-background max-md:sticky top-0 z-50">
        <Link href="/" className="hover:text-foreground/70">
          <img
            src="/fv.png"
            alt="logo"
            className="w-5 hover:opacity-70"
            loading="lazy"
          />
          <span>हिंदी</span>
        </Link>
        <span className="flex">
           <Link href='https://discord.gg/YZxmFp2m' className={cn(buttonVariants({variant:'secondary'}),"w- flex justiy-around mr-2" )}>Discord</Link> 
          <ModeToggle />{" "}
        </span>
      </nav>
    </>
  );
}
