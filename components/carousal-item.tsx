import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { DrawerMain } from "./drawer-main";

interface props{
    url:string,
}
export default function CItem(props:props){
    return(
        <>
        <div className="flex flex-col md:flex-row w-full h-fit md:h-full  ">
    
        <img src={props.url} alt="Featured series image" className="md:w-4/5 w-full object-cover" />
        <div className=" h-full dark:bg-slate-900 p-5 md:w-1/5 w-full flex flex-col  ">
        <h3 className=" font-medium mb-1 ">Solo Leveling</h3>
        <DrawerMain id={3} story={"watch solo leveling"} name="Solo leveling" url={`/watch/${3}/${"solo-leveling"}/`} />
        </div>
        </div></>
    )
}