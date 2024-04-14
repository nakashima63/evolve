"use client";

import React, { useState } from "react";
import CalendarContext from "./CalendarContext";
import dayjs from "dayjs";

interface Props {
  children: React.ReactNode;
}

export const CalendarContextWrapper = ({ children }: Props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  return (
    <CalendarContext.Provider value={{ monthIndex, setMonthIndex }}>
      {children}
    </CalendarContext.Provider>
  );
};
