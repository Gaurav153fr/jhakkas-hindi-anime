"use client"
import Link from "next/link";
import { useParams } from "next/navigation";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

interface Props {
    items: Array<{ no: string }>;
}

export default function EpiList(props: Props) {
    const router = useParams();
    const episode = router.ep;

    return (
        <section className="p-5 grid grid-cols-8 gap-x-2">
            {props.items.map((item, i) => (
                <Link key={i} href={item.no} className={cn(buttonVariants({ variant: 'secondary' }), {
                    "bg-foreground text-background":item.no==episode})}>
                            {item.no}
                </Link>))}

        </section>
    );
}
