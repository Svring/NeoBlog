import Link from "next/link";
import { TimeLineConfig } from "@/config/timeLine";
import { Listbox, ListboxItem } from "@nextui-org/listbox";

export default function Timeline({ timeLine }: { timeLine: TimeLineConfig }) {
  const processTimeLine = (timeLine: TimeLineConfig) => {
    const timelineData: { [year: number]: number[] } = {};

    timeLine.forEach((time) => {
      const year = time.date.getFullYear();
      const month = time.date.getMonth();

      if (!timelineData[year]) {
        timelineData[year] = [];
      }

      if (!timelineData[year].includes(month)) {
        timelineData[year].push(month);
      }
    });

    return timelineData;
  };

  const processedTimeLine = processTimeLine(timeLine);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-4 p-4 border-2 border-blue-500">
      {Object.entries(processedTimeLine)
        .sort((a, b) => parseInt(b[0]) - parseInt(a[0])) // Sort years in descending order
        .map(([year, months]) => (
          <YearBlock key={year} year={year} months={months} />
        ))}
    </div>
  );
}

function YearBlock({ year, months }: { year: string; months: number[] }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="flex flex-col w-1/2">
      <h4 className="text-lg font-bold">{year}</h4>
      <Listbox
        items={months.map((month) => ({
          key: month,
          label: monthNames[month],
        }))}
      >
        {(item) => (
          <ListboxItem
            key={`${year}-${item.key}`}
            className="text-sm text-gray-500"
          >
            <Link href={`#year-${year}-0`}>{item.label}</Link>
          </ListboxItem>
        )}
      </Listbox>
    </div>
  );
}
