import { GetAllSeries } from "@/lib/Get";
import { AspectRatioCard } from "./main-card";
import { EmptyCard } from "./empty-card";
import { AspectRatio } from "./ui/aspect-ratio";

export default async  function RecommendationSeriesContainer() {
  try {
    const seriesData = await  GetAllSeries();
    console.log(seriesData)
    const list: series[] = JSON.parse(JSON.stringify(seriesData));

    return (
      <section className="grid grid-col-2 overflow-x-scroll select-none h-full ">
        {list.length > 0 ? (
          list.map((item, i) => (
            <div key={i} className="w-32 bg-red-600 aspect-video"> {/* Key is necessary when mapping elements */}
            <img src={item.url} alt="series img" className="object-cover" />
            </div>
          ))
        ) : (
          <p>Not found</p>
        )}
      </section>
    );
  } catch (error) {
    console.error("Error fetching series data:", error);
    return null; // Return null or handle the error accordingly
  }
}
