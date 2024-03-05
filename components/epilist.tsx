import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
interface Props {
    items: Array<{ no: string, url: string }>
}

export default function EpiList(props: Props) {
    return (
        <section className=" p-5 grid grid-cols-8 gap-x-2">
            {props.items.map((item, i) => (
                <Link href={"/watch/1/goku/1"} className={cn(buttonVariants({variant:'secondary'})," " )}>{i}</Link>

            ))}
        </section>
    )
}
