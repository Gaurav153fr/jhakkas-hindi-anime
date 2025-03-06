
import { cn } from "@/lib/utils";
import { MainCard } from "@/components/series-main-card";
import SearchBar from "@/components/SearchBar";
import { getSeriesByQuery } from "@/lib/Get";
import { Input } from "@/components/ui/input";

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
     {/* <div className="flex justify-center my-10">
<Input className="w-full h-20 text-5xl font-bold focus:border-amber-600 focus:outline-none border-b-4 border-t-0" placeholder="Search for a series"/>

     </div> */}
      
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
