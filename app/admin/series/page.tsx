"use client"
// import SelectContainer from "@/components/select"
// import { TableDemo } from "@/components/tabled"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { SeriesTable } from "@/components/tableSeries"
import SelectContainer from "@/components/select"

export default function Page() {
  const [id, setid] = useState<any>("")

  const [isTable, setIsTable] = useState<any>(false)
  const [select, setSelect] = useState<any>("loading")
  const [table, setTable] = useState<any>("")
  const [story, setStory] = useState<string>("No story available for this")
  const [slug, setSlug] = useState<string>("")
  const [url, setUrl] = useState<string>("")
  const [seriesName, setSeriesName] = useState<string>("")
const[status,setStatus]=useState<string>("submit to start")

const handleStoryChange= (e: React.ChangeEvent<HTMLInputElement>) => {
    setStory(e.target.value)
  }
  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlug(e.target.value)
  }

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  const handleSeriesNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeriesName(e.target.value)
  }

  const handleSubmit = async () => {
    setStatus("Creating new series")
    try {

      const response = await fetch('/api/series', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if required
        },
        body: JSON.stringify({ seriesName: seriesName, slug: slug,url:url,story:story }),      });

      if (response.ok) {
        alert('Post request successful!')
        setStatus("Created succesful :)")
        // Handle success as needed
      } else {
        alert('Post request failed!')
        setStatus("failed :(")
        // Handle error response
      }
    } catch (error) {
      console.error('Error while sending post request:', error);
      // Handle any network or other errors
    }
    return false
  }

// 
const handleSelectChange = (e: string) => {
  setTable("")
  const data = e.split(',')
  setid(data[0])
  
  
}
// 
const handleistable = () => {
  if(isTable){
    setIsTable(false)
  }
 else{
  setIsTable(true)
 }
  
}
 
  useEffect(() => {
   
  const handleShowTable= async()=>{
   const select = await SelectContainer(handleSelectChange)
   setSelect(select)
  }
     
  handleShowTable()
  }, [])
  
   
  useEffect(() => {
   
    const handleShowTable= async()=>{
     const select = await SeriesTable(id)
     setTable(select)
    }
       if(isTable){
    handleShowTable()}
    }, [id])
    

  return (
    <main className="flex md:px-10 px-2 my-10 flex-col w-full">
      {/* <label className="my-2">Series:{select}</label> */}
      

      <div>
        <label htmlFor="seriesId"  className="my-2">Name:
          <Input id="seriesId" type="text" placeholder="Name" value={seriesName} onChange={handleSeriesNameChange} />
        </label>
        <label htmlFor="episode"  className="my-2">Slug:
          <Input id="episode" type="text" placeholder="slug " value={slug} onChange={handleSlugChange} />
        </label>
        <label htmlFor="url"  className="my-2">Story:
          <Input id="url" type="text" placeholder="Story" value={story} onChange={handleStoryChange} />
        </label>
        <label htmlFor="url"  className="my-2">Image Url:
          <Input id="url" type="text" placeholder="URL" value={url} onChange={handleUrlChange} />
        </label>
        <Button variant='secondary' type="submit"  className="my-2"  onClick={handleSubmit}>Submit</Button>
      </div>
      {select}
      <Button onClick={handleistable}>Load All Series </Button>
{table}
      
       {status}
    </main>
  )
}
