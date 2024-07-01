"use client";
import { useState, useEffect, ChangeEvent } from "react";
import debounce from "lodash/debounce";
import { cn } from "@/lib/utils";
import { MainCard } from "@/components/series-main-card";

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

export default function Page() {
  const [seriesData, setSeriesData] = useState<Series | null>(null);
  const [filteredData, setFilteredData] = useState<ResRow[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/series`, { cache: "force-cache" });
        if (!response.ok) {
          throw new Error("Failed to fetch series data");
        }
        const data: Series = await response.json();
        setSeriesData(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch series data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const debouncedSetSearchQuery = debounce((query: string) => {
    setSearchQuery(query);
  }, 300);

  useEffect(() => {
    return () => {
      debouncedSetSearchQuery.cancel();
    };
  }, [debouncedSetSearchQuery]);

  useEffect(() => {
    if (seriesData) {
      const filteredList = seriesData.rows.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filteredList);
    }
  }, [searchQuery, seriesData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSetSearchQuery(e.target.value);
  };

  return (
    <section className={cn("w-full  gap-x-3 gap-y-5 md:px-5 px-1 justify-center")}>
        <div className="w-full flex items-center justify-center" >
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search series..."
        className="mb-4 p-2 border rounded m-auto"
      /></div>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : filteredData.length > 0 ? (
        <section className= " w-full   gap-x-3 gap-y-5 md:px-5 px-1  justify-center flex flex-wrap">
        {filteredData.map((item) => (
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

export const revalidate = 1800;
