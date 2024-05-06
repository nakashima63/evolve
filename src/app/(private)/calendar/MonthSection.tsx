"use client";
import { useContext, useEffect, useState } from "react";
import { Month } from "@/components/molecules/calendars/Month";
import { getMonth } from "@/libs/dayjs/util";
import CalendarContext from "./CalendarContext";

export const MonthSection = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, todos } = useContext(CalendarContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return <Month month={currentMonth} todos={todos} />;
};
