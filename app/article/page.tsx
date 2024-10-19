import NameCard from "./components/NameCard";
import PostList from "./components/PostList";
import Timeline from "./components/Timeline";

import { postCard } from "@/config/postCard";
import { nameCard } from "@/config/nameCard";

export default function Article() {
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
