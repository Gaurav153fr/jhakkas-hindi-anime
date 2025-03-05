import { QueryResultRow, sql } from "@vercel/postgres";
import React from "react";
import LatestEpisode from "./latest-episode";
interface epRow {
    id: number,
    series: string,
    ep_no: number,
    url: string,
    series_id: number
  
}

const LatestEpisodeContainer = async() => {
    const res = await sql`SELECT * FROM episode ORDER BY id DESC LIMIT 4`;

    const rows:epRow[] = res.rows.map((row: QueryResultRow) => {
        return {
            id:row.ep,
            series:row.series,
            ep_no: row.ep_no,
            url: row.url,
            series_id:row.series_id,
           
        };})
    //console.log(res.rows,res.rows.length);
    
  return (
    <section className=" w-full">
      <div className="md:px-10 ">
        <div className="flex max-md:flex-wrap justify-center ">
           {rows && rows.map((row,index)=>(<LatestEpisode key={index} data={row}/>))}
             
            
            
            </div>{" "}
      </div>{" "}
    </section>
  );
};

export default LatestEpisodeContainer;
