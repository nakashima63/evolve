import dayjs from "dayjs";
import cn from "classnames";
import { Todo } from "@prisma/client";
import { Tag } from "@/components/atoms/Tag";

interface Props {
  day: dayjs.Dayjs;
  todos?: Todo[];
}

export const Day = ({ day, todos = [] }: Props) => {
  const isToday = day.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
  const dayClass = cn({
    "text-sm p-1 my-1 text-center bg-green-600 text-white rounded-full w-7":
      isToday,
    "text-sm p-1 my-1 text-center": !isToday,
  });

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="h-24 flex flex-col items-center overflow-hidden">
        <p className={dayClass}>{day.format("D")}</p>
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="">
              <Tag text={todo.taskName} />
            </div>
          );
        })}
      </header>
    </div>
  );
};
