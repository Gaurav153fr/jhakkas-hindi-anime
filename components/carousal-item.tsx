import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface props{
    url:string,
}
export default function CItem(props:props){
    return(
        <>
        <div className="flex h-full w-full  ">
    
        <img src={props.url} alt="Featured series image" className="md:w-4/5 w-1/2 object-cover" />
        <div className=" h-full dark:bg-slate-900 p-5 md:w-1/5 w-1/2 flex flex-col  ">
        <h3 className=" font-medium mb-1 ">Demon slayer</h3>

        <Link href={"#"} className={buttonVariants({variant:'secondary'})}>Watch</Link>
        </div>
        </div></>
    )
}