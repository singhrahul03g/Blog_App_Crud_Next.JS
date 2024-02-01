
import React from "react";
import { RemoveButton } from "./RemoveButton.tsx";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
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

  return (
    <div>
      {topics && topics.topics && topics.topics.length ? topics.topics.map((t) => (
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
    : <div>Topiclist component</div>
    }
    </div>
  );
};
