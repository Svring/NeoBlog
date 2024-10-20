import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Card, CardBody } from "@nextui-org/card";
import { PostCardConfig } from "@/config/postCard";
import Image from "next/image";

export default function PostList({ postCard }: { postCard: PostCardConfig }) {
  return (
    <ScrollShadow hideScrollBar className="w-full h-full">
      <div className="w-full h-full">
        {postCard.map((post) => (
          <PostCard key={post.id} postCard={post} />
        ))}
      </div>
    </ScrollShadow>
  );
}

function PostCard({ postCard }: { postCard: PostCardConfig[number] }) {
  return (
    <Card
      key={postCard.id}
      isBlurred
      shadow="sm"
      className="border-none bg-background/60 w-full"
    >
      <CardBody>
        <div className="w-full h-36 flex flex-row gap-4 border-2 border-blue-500">
          <div className="relative w-1/4 h-full">
            <Image src={postCard.cover} alt={postCard.title} fill />
          </div>
          <div className="flex flex-col border-2 border-blue-500">
            <h1 className="text-2xl font-bold">{postCard.title}</h1>
            <div className="flex flex-row gap-2">
              <p className="text-sm text-gray-500">
                {new Date(postCard.date).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500">
                {postCard.tags.join(", ")}
              </p>
            </div>
            <p className="text-sm text-gray-500">{postCard.description}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
