import React from "react";
import dayjs from "dayjs";
import { Day } from "@/components/molecules/calendars/Day";
import { week } from "@/consts/week";
import { Todo } from "@prisma/client";

interface Props {
  month: dayjs.Dayjs[][];
  todos?: Todo[];
}

export const Month = ({ month, todos = [] }: Props) => {
  return (
    <>
      <div className="h-10 flex-1 grid grid-cols-7 bg-green-500 text-white rounded-t-md">
        {week.map((day) => (
          <div key={day} className="text-base mt-2 pl-2">
            {day}
          </div>
        ))}
      </div>
      <div className="pb-4 flex-1 grid grid-cols-7">
        {month.map((week, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {week.map((day, dayIndex) => {
              const todosByDay = todos.filter((todo) => {
                return (
                  dayjs(todo.dueDate).format("DD-MM-YY") ===
                  day.format("DD-MM-YY")
                );
              });
              return <Day key={dayIndex} day={day} todos={todosByDay} />;
            })}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
