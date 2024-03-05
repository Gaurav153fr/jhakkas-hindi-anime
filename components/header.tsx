import {  RabbitIcon } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
export default function Header(){
    return(
        <nav
        className="w-full flex justify-between px-10 py-5 drop-shadow-lg shadow-slate-500 border-b-slate-50 border-b-2">
           <Link href="/" className="hover:text-foreground/70">
                <RabbitIcon/><span>Jhakkas</span></Link>
        <ModeToggle/>
        </nav>
    )
}