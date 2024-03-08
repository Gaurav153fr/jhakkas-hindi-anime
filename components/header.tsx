import {  RabbitIcon } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button";
export default function Header(){
    return(<>
        <nav
        className="w-full flex justify-between px-10 py-2 shadow-md border-b-slate-50 border-b-2 border-dashed  bg-background">
           <Link href="/" className="hover:text-foreground/70">
                <img src="/fv.png" alt="logo" className="w-5 hover:opacity-70" loading="lazy" /><span>हिंदी</span></Link>
                <span className='flex'>
                <Link href='/admin' className={cn(buttonVariants({variant:'secondary'}),"w-full flex justiy-around ml-2" )}>Admin</Link>
        <ModeToggle/> </span>
        </nav>
        
        </>
    )
}