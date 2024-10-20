"use client";

import { useEffect, useState } from "react";
import NameCard from "./components/NameCard";
import PostList from "./components/PostList";
import Timeline from "./components/Timeline";

import { PostCardConfig } from "@/config/postCard";
import { NamecardConfig } from "@/config/nameCard";

export default function Article() {
  let [postCard, setPostCard] = useState<PostCardConfig>([]);
  let [nameCard, setNameCard] = useState<NamecardConfig>({
    name: "",
    introduction: "",
  });

  useEffect(() => {
    fetch("/api/article")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setPostCard(data.postCard);
        setNameCard(data.nameCard);
      });
  }, []);

  return (
    <section className="flex flex-row w-full justify-between">
      <div className="w-1/4 h-screen">
        <NameCard namecard={nameCard} />
      </div>
      <div className="w-1/2 h-screen border-2 border-red-500">
        <PostList postCard={postCard} />
      </div>
      <div className="w-1/5 h-screen border-2 border-red-500">
        <Timeline />
      </div>
    </section>
  );
}
