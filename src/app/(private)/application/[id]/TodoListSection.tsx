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
    console.log("以下検証以下検証以下検証以下検証");
    setTodos((currentTodos) => {
      const index = currentTodos.findIndex((todo) => {
        console.log(todo.id);
        console.log(newTodo.id);
        todo.id === newTodo.id;
      });
      // idが一致するものがあれば更新、なければ追加
      if (index > -1) {
        currentTodos[index] = newTodo;
        return currentTodos;
      }
      return [...currentTodos, newTodo];
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
