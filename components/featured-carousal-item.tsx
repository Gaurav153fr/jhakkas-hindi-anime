/* eslint-disable @next/next/no-img-element */
import { DrawerMain } from "./episode-container-drawer";

interface props {
  id: number;
  name: string;
  slug: string;
  story: string;
  url: string;
}
export default function CItem(props: props) {
  return (
    <div className="flex flex-col md:flex-row w-full md:h-full justify-between ">
      <span className=" h-52 w-full  md:w-3/4">
        <img
          src={props.url}
          alt="Featured series image"
          className=" w-full h-full rounded-md object-cover "
          loading="lazy"
        />
      </span>
      <div className=" dark:bg-slate-900 p-2 flex flex-col justify-end md:ml-5  rounded-md w-full ">
        <h3 className=" font-bold mb-5 ">{props.name}</h3>
        <p className="text-gray-400 mb-2">{props.story}</p>
        <DrawerMain
          id={props.id}
          story={props.story}
          name={props.name}
          url={`/watch/${props.id}/${props.slug}/`}
        />
      </div>
    </div>
  );
}
