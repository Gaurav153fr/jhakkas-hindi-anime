import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 interface res{
  rows:Row[]
 }
export default async function SelectContainer(

)
{
  const data:any = await fetch(`api/getserieslist`, { cache: 'force-cache' })
.then((res) => res.json())
.catch((error) => {
console.error('Error fetching data:', error);
throw error;
});
const res:res = JSON.parse(JSON.stringify(data))



  
  return (
  <main>
    <div>
    <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        {res.rows.map((e,i)=>(<SelectItem key={i} value={e.id}>{e.name}</SelectItem>))}
      </SelectGroup>
    </SelectContent>
  </Select>
    </div>
  </main>
)
}