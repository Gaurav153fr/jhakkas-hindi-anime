
import Link from "next/link";

import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { GetEpisodeById } from "@/lib/Get";


interface Props {
    id: number;
    active_ep:number,
}

export default async function EpiList(params: Props) {

    const data = await GetEpisodeById(params.id.toString());
    const list: episode[] = JSON.parse(JSON.stringify(data));
   




    return (
        <section className="p-5 grid grid-cols-8 gap-x-2">
            {list.map((item, i) => (
                <Link key={i} href={item.ep_no.toString()} className={cn(buttonVariants({ variant: 'secondary' }), {
                    "bg-foreground text-background":item.ep_no==params.active_ep})}>
                            {item.ep_no}
                </Link>))} 

        </section>
    );
}
