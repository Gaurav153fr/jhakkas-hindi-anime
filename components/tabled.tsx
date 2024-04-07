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
import { EditEpisodeById } from "@/lib/POST";
//import { useToast } from "@/components/ui/use-toast"

interface epres {
  episode: number;
  url: string;
  seriesId:string
}
interface data {
  data: epres[];
}

export async function TableDemo(id: string) {
  //const { toast } = useToast()
  const data: data = await fetch(`/api/episodes?id=${Number(id)}`, {
    cache: "force-cache",
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
    const sorted=data.data.sort(function(a, b){return a.episode-b.episode})
console.log(sorted,"sorted bhaiiiiii")
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputValue = formData.get("url") as string;
    const episodeId = formData.get("ep") as string;
    const seriesId = formData.get("seriesId") as string;
    await EditEpisodeById((seriesId), (episodeId), inputValue);

    console.log("Input value:", inputValue, episodeId, data);
    // You can perform any further actions with the input value here
  };
  return (
    <Table>
      <TableCaption>All episodes for the selected series</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10px]">Ep No</TableHead>
          <TableHead className="text-right">Url</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sorted &&
          sorted.length > 0 &&
          sorted.map((e, i) => (
            <TableRow key={i} className="w-full">
              <TableCell className="font-medium">{e.episode}</TableCell>
              <TableCell className="text-left w-full">
                <form onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    defaultValue={e.episode}
                    name="ep"
                    className="hidden w-full"
                  />
                   <Input
                    type="text"
                    defaultValue={e.seriesId}
                    name="seriesId"
                    className="hidden w-full"
                  />
                  <Input type="text" defaultValue={e.url} name="url" className="w-full" />
                  <Button type="submit">Submit</Button>
                </form>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Episodes</TableCell>
          <TableCell className="text-right">{data.data.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
