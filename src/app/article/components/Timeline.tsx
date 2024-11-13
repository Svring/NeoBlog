import { TimeLineConfig } from "@/configs/timeLine";
import { Flex, Heading, Text } from "@radix-ui/themes";

export default function Timeline({ timeLine }: { timeLine: TimeLineConfig }) {
  const processTimeLine = (timeLine: TimeLineConfig) => {
    const timelineData: { [year: number]: number[] } = {};

    timeLine.forEach((time) => {
      const date = new Date(time.date);
      const year = date.getFullYear();
      const month = date.getMonth();

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
    <Flex direction="column" width="100%" height="100%" gap="4" p="4">
      {Object.entries(processedTimeLine)
        .sort((a, b) => parseInt(b[0]) - parseInt(a[0])) // Sort years in descending order
        .map(([year, months]) => (
          <YearBlock key={year} year={year} months={months} />
        ))}
    </Flex>
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
    <Flex className="px-4" direction="column" width="100%">
      <Heading as="h4" size="3">{year}</Heading>
      <Flex className="px-4" direction="column">
        {months.map((month) => (
          <Text size="2" color="gray" key={month}>
            {monthNames[month]}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
}
