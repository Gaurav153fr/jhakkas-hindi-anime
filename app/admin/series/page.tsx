"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon, Edit3Icon } from "lucide-react";
import SelectContainer from "@/components/series-selecter";
import SeriesTable from "@/components/edit-series-form";
import toast from "react-hot-toast";

export default function Page() {
  const [selectContainer, setSelectContainer] = useState<any>(null);
  const [isTableVisible, setIsTableVisible] = useState<boolean>(false);
  const [seriesName, setSeriesName] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [story, setStory] = useState<string>("");
  const [url, setUrl] = useState<string>("https://th.bing.com/th/id/OIP.WOb3U-wVlw8UeV2JBqe-FAHaKx?w=115&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7");
  const [seriesTable, setSeriesTable] = useState<any>(<Button disabled>Select a series first</Button>);
  const [seriesDataRaw, setSeriesData] = useState<any>(null);

  const handleStoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStory(e.target.value);
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlug(e.target.value);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSeriesNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeriesName(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/series", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          seriesName,
          slug,
          url,
          story,
        }),
      });

      if (response.ok) {
        toast.success("New series created successfully!");
        setSeriesName("");
        setSlug("");
        setUrl("");
        setStory("");
      } else {
        toast.error("Failed to create new series");
      }
    } catch (error) {
      console.error("Error while sending post request:", error);
      toast.error("Failed to create new series");
    }
  };

const handleSelectChange=(e:string)=>{
  const data=e.split(',/')
  console.log(data)

  const seriesData:Row={
    id: parseInt(data[0]),
    name: data[1],
    slug: data[2],
    sypnosis: data[3],
    url: data[4],
    created_on: data[5]

  }
setSeriesData(seriesData)
}
useEffect(() => {
  // Define an async function within useEffect to fetch initial data
  const fetchData = async () => {
    try {
      // Call SelectContainer to fetch initial data for a specific ID (e.g., "2")
      const select = await SelectContainer(handleSelectChange);
      setSelectContainer(select)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call the async function to fetch data when the component mounts
  fetchData();
}, []); // Empty dependency array ensures useEffect runs only once on mount

useEffect(() => {
  // Define an async function within useEffect to fetch initial data
  const fetchData = async () => {
    try {
      if(seriesDataRaw){
      setSeriesTable(SeriesTable(seriesDataRaw))}
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call the async function to fetch data when the component mounts
  fetchData();
}, [seriesDataRaw]); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <main className="flex md:px-10 px-2 my-10 flex-col w-full">
      <div className="border-2 p-5 rounded-md shadow-md">
        <h2 className="text-xl font-bold">New Series:</h2>
        <div>
          <Input
            type="text"
            placeholder="Name"
            value={seriesName}
            onChange={handleSeriesNameChange}
            className="my-2"
            required
          />
          <Input
            type="text"
            placeholder="Slug"
            value={slug}
            onChange={handleSlugChange}
            className="my-2"
            required
          />
          <Input
            type="text"
            placeholder="Story"
            value={story}
            onChange={handleStoryChange}
            className="my-2"
            required
          />
          <Input
            type="text"
            placeholder="Image URL"
            value={url}
            onChange={handleUrlChange}
            className="my-2"
            required
          />
          <img src={url} alt="Provide image URL" className="h-max-20" />
          <Button onClick={handleSubmit} className="my-2">
            Submit <SendIcon />
          </Button>
        </div>
      </div>
      <div className="border-2 p-5 rounded-md shadow-md mt-5">
        <h2 className="text-xl font-bold mb-5">Edit Series:</h2>
        <div className="flex items-center space-x-4">
         
          {selectContainer}
        {seriesTable}
         
        </div>
       
      </div>
    </main>
  );
}
