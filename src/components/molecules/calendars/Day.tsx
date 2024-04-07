import dayjs from "dayjs";
import cn from "classnames";

interface Props {
  day: dayjs.Dayjs;
  weekIndex: number;
}

export const Day = ({ day, weekIndex }: Props) => {
  const isToday = day.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
  const dayClass = cn({
    "text-sm p-1 my-1 text-center bg-green-600 text-white rounded-full w-7":
      isToday,
    "text-sm p-1 my-1 text-center": !isToday,
  });

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {/** 一行目に曜日を表示 */}
        {weekIndex === 0 && <p className="text-sm mt-1">{day.format("ddd")}</p>}
        <p className={dayClass}>{day.format("D")}</p>
      </header>
    </div>
  );
};
