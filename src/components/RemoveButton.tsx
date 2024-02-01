"use client"

import React from 'react'
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";


export const RemoveButton = ({id}:any) => {

    const router = useRouter();
    const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");
  
      if (confirmed) {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "DELETE",
        });
  
        if (res.ok) {
          router.refresh();
        }
      }
    };

  return (
    <button onClick={removeTopic} className='text-red-400'>
        <MdDelete size={24}/>
    </button>
  )
}
