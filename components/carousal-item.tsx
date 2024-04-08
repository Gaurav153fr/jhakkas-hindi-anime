import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { DrawerMain } from "./drawer-main";

interface props{
    url:string,
}
export default function CItem(props:props){
    return(
    
        <div className="flex flex-col md:flex-row w-full md:h-full justify-between ">
    <span className=" h-52 w-full  md:w-3/4">
        <img src={props.url} alt="Featured series image" className=" w-full h-full rounded-md object-cover " loading="lazy" /></span>
        <div className=" dark:bg-slate-900 p-2 flex flex-col justify-end md:ml-5  rounded-md w-full ">
        <h3 className=" font-medium mb-1 ">Solo Leveling</h3>
        <DrawerMain id={3} story={"watch solo leveling"} name="Solo leveling" url={`/watch/${3}/${"solo-leveling"}/`} />
        </div>
        </div>
    )
}