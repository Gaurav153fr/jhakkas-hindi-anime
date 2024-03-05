import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface props{
    url:string,
}
export default function CItem(props:props){
    return(
        <>
        <div className="flex h-full w-full  ">
    
        <img src={props.url} alt="Featured series image" className="w-4/5" />
        <div className=" h-full dark:bg-slate-900 p-5 w-1/5 flex flex-col  ">
        <h3 className=" font-medium mb-1 ">Demon slayer</h3>

        <Link href={"#"} className={buttonVariants({variant:'secondary'})}>Watch</Link>
        </div>
        </div></>
    )
}