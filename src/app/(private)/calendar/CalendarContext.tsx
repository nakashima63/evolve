import { createContext } from "react";
import { Todo } from "@prisma/client";

interface ContextInterface {
  monthIndex: number;
  setMonthIndex: (index: number) => void;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

const CalendarContext = createContext<ContextInterface>({
  monthIndex: 0,
  setMonthIndex: () => {},
  todos: [],
  setTodos: () => {},
});

export default CalendarContext;
