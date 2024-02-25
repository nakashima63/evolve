import { TodoRepositoryInterface } from "@/repositories/applications/todos/todoRepository";
import { Prisma, Todo } from "@prisma/client";

/**
 * Todo新規登録サービス
 * @param {Prisma.TodoCreateInput} data
 * @param {TodoRepositoryInterface} todoRepository
 * @returns {Promise<Todo>} result
 */
export const createTodoService = (
  data: Prisma.TodoCreateInput,
  todoRepository: TodoRepositoryInterface,
): Promise<Todo> => {
  const result = todoRepository.createTodo(data);
  return result;
};
