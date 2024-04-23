import { GetAllSeries } from "@/lib/Get";
import { MainCard } from "./series-main-card";

export default async function SeriesContainer() {
  const seriesData = await GetAllSeries();

  const list: Row[] = JSON.parse(JSON.stringify(seriesData));
  return (
    <section className=" md:flex md:flex-wrap  max-w-full  gap-x-3 gap-y-5 md:px-5 px-1  justify-center">
      {list.length > 0 ? (
        list.map((item, i) => (
          <div key={i}>
            <MainCard
              id={item.id}
              url={item.url}
              name={item.name}
              slug={item.slug}
              story={item.sypnosis}
            />
          </div>
        ))
      ) : (
        <p className="text-center ">No series found :(</p>
      )}
    </section>
  );
}

export const revalidate = 1800;
