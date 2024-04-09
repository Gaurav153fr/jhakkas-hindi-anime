"use client"
import SelectContainer from "@/components/series-selecter"
import { TableDemo } from "@/components/episode-edit-data-table"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useEffect, useState } from "react"



export default function Page() {
  const [select, setSelect] = useState<any>("loading")
  const [table, setTable] = useState<any>("")
  const [series, setSeries] = useState<string>("please select a series")
  const [episode, setEpisode] = useState<string>("")
  const [url, setUrl] = useState<string>("")
  const [seriesId, setSeriesId] = useState<string>("")

  const handleSelectChange = (e: string) => {
    const data = e.split(',')
    setSeriesId(data[0])
    setSeries(data[1])
  }

  const handleEpisodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEpisode(e.target.value)
  }

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  const handleSeriesIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeriesId(e.target.value)
  }

  const sendPostRequest = async () => {
    try {

      const response = await fetch('/api/new-episode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if required
        },
        body: JSON.stringify({ seriesName: series, epNo: episode,url:url,seriesId:seriesId }),      });

      if (response.ok) {
        console.log('Post request successful!');
        // Handle success as needed
      } else {
        console.error('Post request failed!');
        // Handle error response
      }
    } catch (error) {
      console.error('Error while sending post request:', error);
      // Handle any network or other errors
    }
  }

  useEffect(() => {
    const handleAsync = async () => {
      const s = await SelectContainer(handleSelectChange)
      setSelect(s)
     
    }
    handleAsync()
  }, [])
 
  useEffect(() => {
   setTable("")
  }, [seriesId])
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendPostRequest();
    
  }

  const handleShowTable=()=>{
    if(seriesId.length>0){
    const t = TableDemo(seriesId)
      setTable(t)}
      else{
        setTable("please select a series first")
      }
  }
  return (
    <main className="flex md:px-10 px-2 my-10 flex-col w-full">

      <label className="my-2">Series:{select}</label>
      

      <form onSubmit={handleSubmit}>
        <label htmlFor="seriesId"  className="my-2">Series ID:
          <Input id="seriesId" type="text" placeholder="Series ID" value={seriesId} onChange={handleSeriesIdChange} />
        </label>
        <label htmlFor="episode"  className="my-2">Episode No:
          <Input id="episode" type="text" placeholder="Episode No" value={episode} onChange={handleEpisodeChange} />
        </label>
        <label htmlFor="url"  className="my-2">URL:
          <Input id="url" type="text" placeholder="URL" value={url} onChange={handleUrlChange} />
        </label>
        <Button variant='secondary' type="submit"  className="my-2">Submit</Button>
      </form>
      <Button onClick={handleShowTable}>Load All Episode </Button>
{table}
      
    </main>
  )
}
