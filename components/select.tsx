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
handleChange:(e:string)=>void
)
{
  const data:any = await fetch(`api/series`, { cache: 'force-cache' })
.then((res) => res.json())
.catch((error) => {
console.error('Error fetching data:', error);
throw error;
});
const res:res = JSON.parse(JSON.stringify(data))



  
  return (
  <main>
    <div>
    <Select onValueChange={(value:string)=>handleChange(value)}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a Series" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Series</SelectLabel>
        {res.rows.map((e,i)=>(<SelectItem key={i} value={e.id +","+ e.name}>{e.name}</SelectItem>))}
      </SelectGroup>
    </SelectContent>
  </Select>
    </div>
  </main>
)
}