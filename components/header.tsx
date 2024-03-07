import {  RabbitIcon } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
export default function Header(){
    return(<>
        <nav
        className="w-full flex justify-between px-10 py-2 shadow-md border-b-slate-50 border-b-2 border-dashed  bg-background">
           <Link href="/" className="hover:text-foreground/70">
                <RabbitIcon/><span>Jhakkas हिंदी </span></Link>
                <Link href='/admin'>Admin</Link>
        <ModeToggle/>
        </nav>
        
        </>
    )
}