"use client"
import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GetAllSeries } from "@/lib/Get";

interface SelectSeriesProps {
  onChange: (selectedSeriesId: string) => void;
}

const SelectSeries: React.FC<SelectSeriesProps> = ({ onChange }) => {
  const [series, setSeries] = useState<series[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetAllSeries();
        const list: series[] = JSON.parse(JSON.stringify(data));

        setSeries(list);
      } catch (error) {
        console.error("Error fetching series:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a series" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Series</SelectLabel>
          {Array.isArray(series) && series.length > 0 ? (
            series.map((e, i) => (
              <SelectItem key={i} value={e.id} onSelect={() => onChange(e.id)}>
                {e.name}
              </SelectItem>
            ))
          ) : (
            <SelectItem value="__placeholder__" disabled>
              No series found
            </SelectItem>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectSeries;
