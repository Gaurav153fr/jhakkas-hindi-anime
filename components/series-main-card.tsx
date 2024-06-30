import { DrawerMain } from "./episode-container-drawer";
interface props {
  id: number;
  url: string;
  name: string;
  slug: string;
  story: string;
}
export function MainCard(props: props) {
  return (
    <div className=" dark:bg-slate-900/70 shadow-md md:p-5  md:h-fit md:block flex md:max-w-52 max-w-fit my-2 sm:h-auto min-w-40">
      <div className="w-1/2 md:w-full p-2  h-52 overflow-hidden ">
        <img
          src={props.url}
          alt="Image"
          className=" w-full h-full rounded-md object-cover "
          loading="lazy"
        />
      </div>
      <span className="w-1/2 p-2 md:w-full flex flex-col justify-between pb-5">
        <p className=" line-clamp-3 font-semibold text-slate-600 text-sm">
          {props.story}
        </p>
        <span>
          <h3 className=" font-medium my-1 text-center line-clamp-1 ">{props.name}</h3>
          <DrawerMain
            id={props.id}
            story={props.story}
            name={props.name}
            url={`/watch/${props.id}/${props.slug}/`}
          />
          {/* <Link href= className={cn(buttonVariants({variant:'secondary'}),"w-full flex justiy-around" )}></Link> */}
        </span>
      </span>
    </div>
  );
}
