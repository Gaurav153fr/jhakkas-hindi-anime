import { GetAllSeries } from "@/lib/Get";
import { MainCard } from "./series-main-card";
import { cn } from "@/lib/utils";

export default async function SeriesContainer({horizontal}:{horizontal:Boolean}) {
  const seriesData = await GetAllSeries();

  const list: Row[] = JSON.parse(JSON.stringify(seriesData));
  return (
    <section className={ cn(" w-full md:flex max-w-full  gap-x-3 gap-y-5 md:px-5 px-1  justify-center", horizontal?"":"md:flex-wrap")}>
      {list.length > 0 ? (
        list.map((item, i) => (
          
            <MainCard
            key={item.id}
              id={item.id}
              url={item.url}
              name={item.name}
              slug={item.slug}
              story={item.sypnosis}
            />
         
        ))
      ) : (
        <p className="text-center ">No series found :(</p>
      )}
    </section>
  );
}

export const revalidate = 1800;
