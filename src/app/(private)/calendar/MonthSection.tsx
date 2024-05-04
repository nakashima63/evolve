"use client";
import { useContext, useEffect, useState } from "react";
import { Month } from "@/components/molecules/calendars/Month";
import { getMonth } from "@/libs/dayjs/util";
import CalendarContext from "./CalendarContext";

export const MonthSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(CalendarContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return <Month month={currentMonth} />;
};
