import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface props{
    url:string,
}
export default function CItem(props:props){
    return(
        <>
        <div className="flex flex-col md:flex-row w-full h-52 md:h-full  ">
    
        <img src={props.url} alt="Featured series image" className="md:w-4/5 w-full object-cover" />
        <div className=" h-full dark:bg-slate-900 p-5 md:w-1/5 w-full flex flex-col  ">
        <h3 className=" font-medium mb-1 ">Demon slayer</h3>

        <Link href={"#"} className={buttonVariants({variant:'secondary'})}>Watch</Link>
        </div>
        </div></>
    )
}