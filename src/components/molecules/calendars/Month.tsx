import React from "react";
import dayjs from "dayjs";
import { Day } from "@/components/molecules/calendars/Day";
import { week } from "@/consts/week";

interface Props {
  month: dayjs.Dayjs[][];
}

export const Month = ({ month }: Props) => {
  return (
    <>
      <div className="h-10 flex-1 grid grid-cols-7 bg-green-500 text-white rounded-t-md">
        {week.map((day) => (
          <div key={day} className="text-base mt-2 pl-2">
            {day}
          </div>
        ))}
      </div>
      <div className="h-10 flex-1 grid grid-cols-7">
        {month.map((week, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {week.map((day, dayIndex) => (
              <Day day={day} key={dayIndex} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
