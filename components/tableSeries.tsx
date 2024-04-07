import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Input } from "./ui/input";
  import { Button } from "./ui/button";
  import { FormEvent } from "react";
  import { EditEpisodeById, EditSeriesById } from "@/lib/POST";
  //import { useToast } from "@/components/ui/use-toast"
  
  interface Row {
    id: string;
    name: string;
    slug: string;
    sypnosis: string;
    url: string;
    created_on: string;
}
  interface data {
    rows: Row[];
  }
  
  export async function SeriesTable(id:number) {
    console.log(id)
    const data: data = await fetch(`/api/series?id=${id}`, {
      cache: "force-cache",
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw error;
      });
    console.log(data)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name") as string;
      const slug = formData.get("slug") as string;
      const url = formData.get("url") as string;
      const story = formData.get("story") as string;

      await EditSeriesById(data.rows[0].id,name,slug,url,story);
  
      console.log("Input value:", name, slug, url,story);
      // You can perform any further actions with the input value here
    };
    return (
     
      <main>
 <form onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="Name" defaultValue={data.rows[0].name} />
                <Input type="text" name="slug" placeholder="slug" defaultValue={data.rows[0].slug} />
                <Input type="text" name="url" placeholder="url" defaultValue={data.rows[0].url} />
                <Input type="text" name="story" placeholder="Story" defaultValue={data.rows[0].sypnosis} />

                <button type="submit">Submit</button>
              </form>
      </main>
    );
  }
  