'use client'
import { useEffect, useState } from "react"
import axios from 'axios'

export default function Home() {

  const [text, setText] = useState("Loading...");
 useEffect(()=>{
  axios.get("http://localhost:5000/event").then((res)=>{
    setText(res.data.name)
  });
 },[]);

  return (
    <div>{text}</div>
  )
}

