"use client";

import { useEffect, useState } from "react";
import NameCard from "./components/NameCard";
import PostList from "./components/PostList";
import Timeline from "./components/Timeline";

import { PostCardConfig, sortByTime } from "@/config/postCard";
import { NamecardConfig } from "@/config/nameCard";
import { TimeLineConfig } from "@/config/timeLine";

export default function Article() {
  let [postCard, setPostCard] = useState<PostCardConfig>([]);
  let [nameCard, setNameCard] = useState<NamecardConfig>({
    name: "",
    introduction: "",
  });
  let [timeLine, setTimeLine] = useState<TimeLineConfig>([]);

  useEffect(() => {
    fetch("/api/article")
      .then((res) => res.json())
      .then((data) => {
        const { posts, timeline } = sortByTime(data.postCard);
        setPostCard(posts);
        setTimeLine(timeline);
        setNameCard(data.nameCard);
      });

    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="flex flex-row w-full h-screen justify-between p-2 box-border">
      <div className="w-1/4">
        <NameCard nameCard={nameCard} />
      </div>
      <div className="w-1/2 border-2 border-red-500">
        <PostList postCard={postCard} />
      </div>
      <div className="w-1/5 border-2 border-red-500">
        <Timeline timeLine={timeLine} />
      </div>
    </div>
  );
}
