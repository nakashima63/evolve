"use client";

import { useContext } from "react";
import { CalendarHeader } from "@/components/molecules/calendars/CalendarHeader";
import CalendarContext from "./CalendarContext";
import dayjs from "dayjs";

export const CalendarHeaderSection = () => {
  const { monthIndex, setMonthIndex } = useContext(CalendarContext);
  const month = dayjs(new Date(dayjs().year(), monthIndex)).format(
    "YYYY年 M月",
  );

  const handlePrevMonth = () => {
    console.log("prev");
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  const handleReset = () => {
    // 現在の月を取得
    setMonthIndex(dayjs().month());
  };

  return (
    <CalendarHeader
      month={month}
      handlePrevMonth={handlePrevMonth}
      handleNextMonth={handleNextMonth}
      handleReset={handleReset}
    />
  );
};
