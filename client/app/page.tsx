'use client'
import { useEffect, useState } from "react"
import axios from 'axios'
import { getTasks } from "./_api/api";
export default function Home() {

  const [text, setText] = useState("Loading...");
  useEffect(() => {
    setTextHelper()
  }, []);

  const setTextHelper = async () => {
    const data = await getTasks();
    if (data)
      setText(data[0].name)
  }
  return (
    <div>
      <div>{text}</div>
    </div>
  )
}

