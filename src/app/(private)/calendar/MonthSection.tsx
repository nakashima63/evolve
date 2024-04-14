"use client";
import { useState } from "react";
import { Month } from "@/components/molecules/calendars/Month";
import { getMonth } from "@/libs/dayjs/util";

export const MonthSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  return <Month month={currentMonth} />;
};
