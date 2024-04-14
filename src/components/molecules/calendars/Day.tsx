import dayjs from "dayjs";
import cn from "classnames";

interface Props {
  day: dayjs.Dayjs;
}

export const Day = ({ day }: Props) => {
  const isToday = day.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
  const dayClass = cn({
    "text-sm p-1 my-1 text-center bg-green-600 text-white rounded-full w-7":
      isToday,
    "text-sm p-1 my-1 text-center": !isToday,
  });

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="h-20 flex flex-col items-center">
        <p className={dayClass}>{day.format("D")}</p>
      </header>
    </div>
  );
};
