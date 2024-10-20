"use client";

import { useEffect, useState } from "react";
import NameCard from "./components/NameCard";
import PostList from "./components/PostList";
import Timeline from "./components/Timeline";

import { PostCardConfig } from "@/config/postCard";
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
        setPostCard(sortByTime(data.postCard));
        setNameCard(data.nameCard);
      });
  }, []);

  function sortByTime(postCard: PostCardConfig) {
    postCard.map((post) => {
      post.date = new Date(post.date);
    });
    const sortedPostCard = postCard.sort((a, b) => {
      return b.date.getTime() - a.date.getTime();
    });

    const timeLineArray = sortedPostCard.map((post) => ({ date: post.date }));
    setTimeLine(timeLineArray);

    return sortedPostCard;
  }

  return (
    <section className="flex flex-row w-full justify-between">
      <div className="w-1/4 h-screen">
        <NameCard nameCard={nameCard} />
      </div>
      <div className="w-1/2 h-screen border-2 border-red-500">
        <PostList postCard={postCard} />
      </div>
      <div className="w-1/5 h-screen border-2 border-red-500">
        <Timeline timeLine={timeLine} />
      </div>
    </section>
  );
}
