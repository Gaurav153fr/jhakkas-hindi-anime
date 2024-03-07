"use client"
import React, { useState, useEffect, useLayoutEffect } from "react";
import { GetAllSeries } from "@/lib/Get";

function SelectSeries() {
  const [series, setSeries] = useState<Row[]>([]);

  useEffect(() => {
  const fetchData =async ()=>{
    const data = await GetAllSeries()
    const list: Row[] = JSON.parse(JSON.stringify(data));
    setSeries(list)
    console.log(list,series)

  }
  fetchData()
  }, []);


  return (
    <div>
      <h1>Select Series</h1>
      {Array.isArray(series) && series.length > 0 ? (
        <ul>
          {series.map((e, i) => (
            <li key={i}>{e.name}</li>
          ))}
        </ul>
      ) : (
        <p>No series found</p>
      )}
    </div>
  );
}

export default SelectSeries;
