/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'
import Link from 'next/link'
import { GetAllSeries, GetSlugById } from '@/lib/Get'
interface epRow {
  id: number,
  series: string,
  ep_no: number,
  url: number,
  series_id: number

}

const LatestEpisode = async({data}:{data:epRow}) => {
  const slug = await GetSlugById(data.series_id);
   
  return (
    <Card className="bg-gradient-to-r from-secondary/90 to-secondary/70 text-secondary-foreground mx-1">
    <CardHeader className="flex items-center justify-between">
      <div>
        <CardTitle className='line-clamp-2 max-md:text-sm text-xl w-full tracking-tighter'>{data.series}</CardTitle>
        <CardDescription className='text-center w-full'>Episode {data.ep_no}</CardDescription>
      </div>
      <Button variant="outline" size="sm">
        <Link  href={`/watch/${data.series_id}/${slug}/${data.ep_no}`}>Watch Now</Link>
        
      </Button>
    </CardHeader>
    
  </Card>
  )
}

export default LatestEpisode