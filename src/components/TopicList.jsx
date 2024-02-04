
import React from "react";
import { RemoveButton } from "./RemoveButton.tsx";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    
    const res = await fetch(`${process.env.API_ENDPOINT}/topics`, {
      cache:"no-store",
    });

    const topics = await res.json();

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

   
    return topics
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export const TopicList = async () => {

 
 const topics = await getTopics();
 console.log(topics,"topics")

  return (
    <div>
      {topics.topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveButton id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))
   
    }
    </div>
  );
};
