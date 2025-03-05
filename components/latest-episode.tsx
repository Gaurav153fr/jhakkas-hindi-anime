/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'
import Link from 'next/link'
import { GetAllSeries, GetSlugById } from '@/lib/Get'
import { sql } from '@vercel/postgres'
interface epRow {
  id: number,
  series: string,
  ep_no: number,
  url: string,
  series_id: number

}

const LatestEpisode = async({data}:{data:epRow}) => {
  const slug = await GetSlugById(data.series_id);
  const thumbnail= await (await sql`SELECT url FROM series WHERE id=${data.series_id}`).rows[0];

  
  return (
    <Link className="relative  w-52 h-64 rounded-3xl overflow-hidden  p-2 " href={`/watch/${slug}/${data.ep_no}`}>
    {" "}
    {/* Fixed height for the card */}
    <div className="relative rounded-3xl ">
      <div className="relative w-full h-full ">
        {/* Image */}
        <img
          src={thumbnail.url}
          alt={data.series}
          className="w-full h-full object-cover  opacity-40 rounded-3xl"
          height={145}
          width={100}
          // Image with proper fit and opacity
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-0"></div>
        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-8xl flex items-end font-extrabold text-white mix-blend-difference [text-shadow:_0_4px_8px_rgba(0_0_0_/_0.5)]">
          {data.ep_no}
          </p>
          <p className="text-white text-xl mt-2 font-serif italic font-medium p-2 ">{data.series}</p>
        </div>
      </div>
    </div>
  </Link>
  )
}

export default LatestEpisode