import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface props{
    url:string,
}
export default function CItem(props:props){
    return(
        <>
        <div className="relative ">
    
        <img src={props.url} alt="Featured series image" />
        <div className="fixed top-0 left-0 bg-gradient-to-r from-black pl-36 pt-56 w-full h-full">
        <h3 className=" font-medium mb-1 ">Demon slayer</h3>

        <Link href={"#"} className={buttonVariants({variant:'destructive'})}>Watch</Link>
        </div>
        </div></>
    )
}