"use client"
import SelectContainer from "@/components/select"
import { setDefaultAutoSelectFamily } from "net"
import { useEffect, useState } from "react"
export default  function Page(){
const[select,setSelect]=useState<any>("loading")
useEffect(()=>{
  const handleasync = async ()=>{
const s =await SelectContainer()
setSelect(s)
  }
  handleasync()
},[])
 
    return (
    <main>
      hi
      {select}
  
    </main>
  )
    }