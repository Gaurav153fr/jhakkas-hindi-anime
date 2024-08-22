"use client";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

const SearchBar = () => {
  const inpRef = useRef<any>();
  const router = useRouter(); // Get the router instance

  const handleSubmit = () => {
    if (inpRef.current) {
      router.push(`/search?q=${inpRef.current.value}`); // Navigate programmatically
    }
  };

  return (
    <div className="w-full flex items-center gap-1">
      <Input
        type="text"
        placeholder="Search series..."
        className="mb-4 p-2  rounded m-auto "
        ref={inpRef}
      />
      <Button onClick={handleSubmit} variant="ghost">
       <SearchIcon/>
      </Button>
    </div>
  );
};

export default SearchBar;
