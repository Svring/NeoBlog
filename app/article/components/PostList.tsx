import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Card, CardBody } from "@nextui-org/card";
import { PostCardConfig } from "@/config/postCard";
import { Image } from "@nextui-org/image";

export default function PostList({ postCard }: { postCard: PostCardConfig }) {
  return (
    <ScrollShadow className="w-full h-full">
      <div className="w-full h-full">
        {postCard.map((post) => (
          <PostCard postCard={post} />
        ))}
      </div>
    </ScrollShadow>
  );
}

function PostCard({ postCard }: { postCard: PostCardConfig[number] }) {
  return (
    <Card isBlurred shadow="sm" className="border-none bg-background/60 w-full">
      <CardBody>
        <div className="w-full flex flex-row gap-4 border-2 border-blue-500">
          <Image src={postCard.cover} alt={postCard.title}/>
          <div className="flex flex-col border-2 border-blue-500">
            <h1 className="text-2xl font-bold">{postCard.title}</h1>
            <div className="flex flex-row gap-2">
              <p className="text-sm text-gray-500">{postCard.date}</p>
              <p className="text-sm text-gray-500">{postCard.tags.join(", ")}</p>
            </div>
            <p className="text-sm text-gray-500">{postCard.description}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
