import { GetAllSeries } from "@/lib/Get";
import { MainCard } from "./main-card";
import { EmptyCard } from "./empty-card";

export default async function SeriesContainer() {
  try {
    const seriesData = await GetAllSeries();
   
    const list: Row[] = JSON.parse(JSON.stringify(seriesData));
    console.log(list)
    return (
      <section className="grid grid-cols-5 gap-x-3 gap-y-5 px-5" >
        {list.length > 0 ? (
          list.map((item, i) => (
            <div key={i}> {/* Key is necessary when mapping elements */}
              <MainCard id={item.id} url={item.url} name={item.name} slug={item.slug} story={item.sypnosis} />
            </div>
          ))
        ) : (
          <p>Not found</p>
        )}
             <EmptyCard/>
      </section>
    );
  } catch (error) {
    console.error("Error fetching series data:", error);
    return null; // Return null or handle the error accordingly
  }
}
