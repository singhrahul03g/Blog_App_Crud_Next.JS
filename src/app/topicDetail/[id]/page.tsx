import React from 'react'

const getTopicById = async (id:any) => {
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
  
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  export default async function TopicDetail({ params }:any) {

    const { id } = params;
    const { topic } = await getTopicById(id);
    const { title, description } = topic;
  
    return <div
    key={id}
    className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
  >
    <div>
      <h2 className="font-bold text-2xl">{title}</h2>
      <div>{description}</div>
    </div>

    
  </div>

  }