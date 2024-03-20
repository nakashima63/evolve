"use client";

import { TodoIndexDtoInterface } from "@/dtos/applications/todos/TodoIndexDto";
import { TodoListTable } from "../../../../components/organisms/applications/TodoListTable";
import { useState } from "react";
import { TodoFormDrawer } from "@/components/organisms/applications/TodoFormDrawer";

interface Props {
  todos: TodoIndexDtoInterface[];
}

export const TodoListSection = ({ todos: initTodos }: Props) => {
  const [todos, setTodos] = useState<TodoIndexDtoInterface[]>(initTodos);
  const [targetTodo, setTargetTodo] = useState<TodoIndexDtoInterface | null>(
    null,
  );
  const [isOpen, setIsOpen] = useState(false);

  const updateIsOpen = (bool: boolean): void => {
    setIsOpen(bool);
  };
  const updateTodos = (newTodo: TodoIndexDtoInterface): void => {
    setTodos((currentTodos) => {
      const newTodos = currentTodos.map((todo) => {
        if (todo.id === newTodo.id) {
          return newTodo;
        }
        return todo;
      });

      return newTodos;
    });
  };
  const updateTargetTodo = (todo: TodoIndexDtoInterface | null): void => {
    setTargetTodo(todo);
  };

  return (
    <section>
      <div className="border border-green-600 border-solid rounded-md mt-4">
        <TodoFormDrawer
          targetTodo={targetTodo}
          isOpen={isOpen}
          updateIsOpen={updateIsOpen}
          updateTodos={updateTodos}
          updateTargetTodo={updateTargetTodo}
        />
        <TodoListTable
          todos={todos}
          updateIsOpen={updateIsOpen}
          updateTargetTodo={updateTargetTodo}
        />
      </div>
    </section>
  );
};
