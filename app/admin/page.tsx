import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";


export default function Page() {

  return (
    <main className="flex md:px-10 px-2 my-10 flex-col w-full gap-y-5">
   <Link href='/admin/series' className={cn(buttonVariants({variant:'secondary'}),"w-full flex justiy-around ml-2" )}>New Series</Link>
   <Link href='/admin/episode' className={cn(buttonVariants({variant:'secondary'}),"w-full flex justiy-around ml-2" )}>New Episode</Link>

    
      
    </main>
  )
}
