'use client';

import { useEffect, useState } from "react";
import { Flex } from "@radix-ui/themes";

import NameCard from "./components/NameCard";
import PostList from "./components/PostList";
import Timeline from "./components/Timeline";

import { NameConfig } from "@/configs/nameConfig";
import { IPost } from "@/models/Post";

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const [posts, setPosts] = useState<IPost[]>([]);
  const [nameConfig, setNameConfig] = useState<NameConfig>({
    name: "123",
    introduction: "123"
  });
  const [timeLine, setTimeLine] = useState<{ date: Date }[]>([]);

  useEffect(() => {
    setIsClient(true);

    fetch('/api/article')
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
        setNameConfig(data.nameConfig);
        setTimeLine(data.timeline);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    isClient ? (
      <Flex className="bg-black" justify={'between'} direction={'row'} width="100%" height={'100vh'} p={'2'}>
        <Flex className="border-2 border-red-500" width={'25%'}>
          <NameCard nameConfig={nameConfig} />
        </Flex>
        <Flex className="border-2 border-red-500" width={'50%'}>
          <PostList posts={posts} />
        </Flex>
        <Flex className="border-2 border-red-500" width={'20%'}>
          <Timeline timeLine={timeLine} />
        </Flex>
      </Flex>
    ) : (
      <></>
    )
  );
}
