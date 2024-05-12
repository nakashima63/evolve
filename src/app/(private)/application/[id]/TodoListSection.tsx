"use client";

import { TodoIndexDtoInterface } from "@/dtos/applications/todos/TodoIndexDto";
import { TodoListTable } from "../../../../components/organisms/applications/TodoListTable";
import { useEffect, useState } from "react";
import { TodoFormDrawer } from "@/components/organisms/applications/TodoFormDrawer";

interface Props {
  applicationId: string;
}

export const TodoListSection = ({ applicationId }: Props) => {
  const [todos, setTodos] = useState<TodoIndexDtoInterface[] | []>([]);
  const [targetTodo, setTargetTodo] = useState<TodoIndexDtoInterface | null>(
    null,
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch(`/api/application/${applicationId}/todo`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-cache",
      });
      const data = await res.json();
      setTodos(data.todos);
    };
    fetchTodos();
  }, [applicationId]);

  const updateIsOpen = (bool: boolean): void => {
    setIsOpen(bool);
  };

  const upsertTodos = (newTodo: TodoIndexDtoInterface): void => {
    if (todos.find((todo) => todo.id === newTodo.id)) {
      const newTodos = todos.map((todo) => {
        if (todo.id === newTodo.id) {
          return newTodo;
        }
        return todo;
      });
      setTodos(newTodos);
      setTargetTodo(null);
    } else {
      setTodos([...todos, newTodo]);
    }
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
          upsertTodos={upsertTodos}
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
