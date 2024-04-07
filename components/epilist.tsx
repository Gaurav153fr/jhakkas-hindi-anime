
import Link from "next/link";

import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { GetEpisodeById } from "@/lib/Get";


interface Props {
    id: number;
    active_ep:number,
    url?:string,
}

export default async function EpiList(params: Props) {
    var url:string;
params.url?url=params.url:url=''
    const data = await GetEpisodeById(params.id.toString());
    const list: episode[] = JSON.parse(JSON.stringify(data));
    const sorted=list.sort(function(a, b){return a.ep_no-b.ep_no})




    return (
        <section className="p-5 flex flex-wrap md:gap-3 gap-4 ">
            {sorted && sorted.map((item, i) => (
                <Link key={i} href={`${url}${item.ep_no}`} className={cn(buttonVariants({ variant: 'outline' }), {
                    "bg-foreground text-background":item.ep_no==params.active_ep})}>
                            {item.ep_no}
                </Link>))} 

        </section>
    );
}
