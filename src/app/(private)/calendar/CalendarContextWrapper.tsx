"use client";

import React, { useEffect, useState } from "react";
import CalendarContext from "./CalendarContext";
import dayjs from "dayjs";
import { Todo } from "@prisma/client";

interface Props {
  allTodos: Todo[];
  children: React.ReactNode;
}

export const CalendarContextWrapper = ({ allTodos, children }: Props) => {
  const [monthIndex, setMonthIndex] = useState<number>(dayjs().month());
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const todosByMonth = allTodos.filter((todo) => {
      return dayjs(todo.dueDate).month() === monthIndex;
    });
    setTodos(todosByMonth);
  }, [monthIndex, allTodos]);

  return (
    <CalendarContext.Provider
      value={{ monthIndex, setMonthIndex, todos, setTodos }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
