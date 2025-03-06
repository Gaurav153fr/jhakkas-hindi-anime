"use client";
import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

const SearchBar = () => {
  const inpRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleSubmit = () => {
    if (inpRef.current) {
      router.push(`/search?q=${inpRef.current.value}`);
    }
  };

  const handleChange = () => {
    if (timeoutId) clearTimeout(timeoutId); // Clear previous timeout

    const newTimeout = setTimeout(() => {
      handleSubmit();
    }, 2000); // Waits 2 seconds after last input change

    setTimeoutId(newTimeout);
  };

  return (
    <div className="w-full flex items-center justify-items-end gap-1 ">
      <Input
        type="text"
        placeholder="Search series..."
        className="mb-4 p-2 rounded m-auto "
        ref={inpRef}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
        onChange={handleChange} // Debounced search
      />
      <Button onClick={handleSubmit} variant="ghost" className="h-full">
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchBar;
