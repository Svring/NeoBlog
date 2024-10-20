import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { NamecardConfig } from "@/config/nameCard";

export default function NameCard({ nameCard }: { nameCard: NamecardConfig }) {
  return (
    <div className={`
      w-full h-full 
      rounded-lg p-4
      ring-2 ring-red-400 ring-inset
    `}>
      <Card className="bg-background/0 border-orange-600">
        <CardHeader className="">
          <div className="text-white p-4">
            <h1 className="text-2xl font-bold">
              {nameCard.name}
            </h1>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="bg-transparent">
          <div className="text-white p-4">
            <p>{nameCard.introduction}</p>
          </div>
          <p className="text-white p-4">
            Namecard Under Construction.
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
