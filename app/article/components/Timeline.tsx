import { TimeLineConfig } from "@/config/timeLine";

export default function Timeline({ timeLine }: { timeLine: TimeLineConfig }) {
  return (
    <div className="w-full h-full flex flex-col p-4 border-2 border-blue-500">
      {timeLine.map((time) => (
        <div>{time.date.toLocaleDateString()}</div>
      ))}
    </div>
  );
}

