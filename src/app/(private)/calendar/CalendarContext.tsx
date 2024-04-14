import { createContext } from "react";

const CalendarContext = createContext({
  monthIndex: 0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setMonthIndex: (index: number) => {},
});

export default CalendarContext;
