import React from "react";
import dayjs from "dayjs";
import { Day } from "@/components/molecules/calendars/Day";

interface Props {
  month: dayjs.Dayjs[][];
}

export const Month = ({ month }: Props) => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      <header className="flex flex-col">
        <p className="text-sm mt-1">Sun</p>
        <p className="text-sm mt-1">Mon</p>
        <p className="text-sm mt-1">Tue</p>
        <p className="text-sm mt-1">Wed</p>
        <p className="text-sm mt-1">Thu</p>
        <p className="text-sm mt-1">Fri</p>
        <p className="text-sm mt-1">Sat</p>
      </header>
      {month.map((week, weekIndex) => (
        <React.Fragment key={weekIndex}>
          {week.map((day, dayIndex) => (
            <Day day={day} key={dayIndex} weekIndex={weekIndex} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
