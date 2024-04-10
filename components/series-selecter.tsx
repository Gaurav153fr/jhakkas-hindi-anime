import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Row {
  id: string;
  name: string;
  slug: string;
  sypnosis: string;
  url: string;
  created_on: string;
}
interface SeriesData {
  rows: Row[];
}



export default async function SelectContainer( handleChange : (value:string)=>void) {
  try {
    const response = await fetch(`/api/series`, { cache: "force-cache" });
    if (!response.ok) {
      throw new Error("Failed to fetch series data");
    }
    const data: SeriesData = await response.json();
    console.log(data)

    return (
      <div>
        <Select onValueChange={(value: string) => handleChange(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a Series" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Series</SelectLabel>
              {data.rows.length > 0 ? (
                data.rows.map((row) => (
                  <SelectItem key={row.id} value={`${row.id},/${row.name},/${row.slug},/${row.sypnosis},/${row.url},/${row.created_on}`}>
                    {row.name}
                  </SelectItem>
                ))
              ) : (
                <SelectItem value="" disabled>
                  No series available
                </SelectItem>
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  } catch (error) {
    console.error("Error fetching series data:", error);
    return (
      <div>
        <p>Error fetching series data. Please try again later.</p>
      </div>
    );
  }
}
