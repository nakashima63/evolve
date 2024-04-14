"use client";
import { useContext } from "react";
import { CalendarHeader } from "@/components/molecules/calendars/CalendarHeader";
import CalendarContext from "./CalendarContext";
import dayjs from "dayjs";

export const CalendarHeaderSection = () => {
  const { monthIndex, setMonthIndex } = useContext(CalendarContext);
  const month = dayjs(new Date(dayjs().year(), monthIndex)).format("YYYY MM");

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  return (
    <CalendarHeader
      month={month}
      handlePrevMonth={handlePrevMonth}
      handleNextMonth={handleNextMonth}
    />
  );
};
