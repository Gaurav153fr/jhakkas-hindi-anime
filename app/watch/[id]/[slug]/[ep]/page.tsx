"use client"
import EpiList from "@/components/epilist";
import { GetAllSeries } from "@/lib/Get";
import { useEffect, useState } from "react";

interface params {
  id: number;
  slug: string;
  ep: number;
}

const items = [
  { no: "1", url: "#" },
  { no: "2", url: "#" },
  { no: "3", url: "#" },
  { no: "4", url: "#" },
  { no: "5", url: "#" },
  { no: "6", url: "#" },
  { no: "7", url: "#" },
];

export default function Home({ params }: { params: params }) {
  const [seriesData, setSeriesData] = useState<any>(null); // State to hold fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetAllSeries();
        setSeriesData(data); // Set fetched data to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call fetchData function
  }, []); // Empty dependency array to run the effect only once on mount

  // Ensure useEffect is being triggered by logging seriesData
  console.log("Series Data:", seriesData);

  return (
    <main className="flex flex-col items-center justify-between">
      <section className="flex w-screen h-screen">
        <div className="w-3/5 h-fit aspect-video p-5">
          <iframe
          sandbox="allow-scripts"
            src="https://filemoon.sx/e/b1okpn7sqk3v/EP.1.v0.1688667918.360p.mp4"
            className="w-full h-full rounded-md shadow-lg"
          />
        </div>
        <div className="w-2/5 h-full">
          <h2 className="font-bold text-2xl my-5">Available Episodes</h2>
          <EpiList items={items} />
        </div>
      </section>
    </main>
  );
}
