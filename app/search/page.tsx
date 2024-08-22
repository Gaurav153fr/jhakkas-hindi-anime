
import { cn } from "@/lib/utils";
import { MainCard } from "@/components/series-main-card";
import SearchBar from "@/components/SearchBar";
import { getSeriesByQuery } from "@/lib/Get";

interface ResRow {
  created_on: string;
  id: number;
  name: string;
  slug: string;
  sypnosis: string;
  url: string;
}

interface Series {
  rows: ResRow[];
}

export default async function Page({
  searchParams,
}: {
  searchParams: { q: string };
}) {

const series = await getSeriesByQuery(searchParams.q)

  return (
    <section
      className={cn("w-full  gap-x-3 gap-y-5 md:px-5 px-1 justify-center")}
    >
     
      
      {series.length > 0 ? (
        <section className=" w-full   gap-x-3 gap-y-5 md:px-5 px-1  justify-center flex flex-wrap">
          {series.map((item) => (
            <MainCard
              key={item.id}
              id={item.id} // Ensure key is string type
              url={item.url}
              name={item.name}
              slug={item.slug}
              story={item.sypnosis}
            />
          ))}
        </section>
      ) : (
        <p className="text-center">No series found :(</p>
      )}
    </section>
  );
}
