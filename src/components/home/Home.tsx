"use client";

import { IPoem } from "@/types/poemModels";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { CreatePoem } from "./CreatePoem";

export function Home() {
  const [poems, setPoems] = useState<IPoem[]>([]);

  const url = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    getAllPoems();
  }, [])

  async function getAllPoems() {
    try {
      const response = await axios.get(`${url}/api/poems`);
      setPoems(response.data);
    } catch (error) {
      toast.error(JSON.stringify(error));
    }
  }

  return (
    <div className="flex flex-col items-start justify-center m-4 text-2xl">
      {/* Work in Progress... */}
      <CreatePoem/>
      {poems.map((poem, index) => (
        <div 
        key={index}
        className="flex flex-col items-center justify-center w-4/12 border-b-2 border-b-grayDefault"
        >
          <div className="border-b-2 border-b-oldPaper-light mt-8">
            {poem.title}
          </div>
          {poem.content}
        </div>
      ))}
    </div>
  )
}