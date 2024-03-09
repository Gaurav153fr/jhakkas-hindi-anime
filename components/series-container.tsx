import { GetAllSeries } from "@/lib/Get";
import { MainCard } from "./main-card";
import { EmptyCard } from "./empty-card";


export default async function SeriesContainer() {
    const seriesData = await GetAllSeries();
   
    const list: Row[] = JSON.parse(JSON.stringify(seriesData));
    return (
      <section className=" flex flex-wrap  gap-x-3 gap-y-5 md:px-5 px-1 self-start" >
       
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
    )
        }
        export const revalidate=60