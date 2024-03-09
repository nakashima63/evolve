import { TodoRepositoryInterface } from "@/repositories/applications/todos/todoRepository";
import { Prisma, Todo } from "@prisma/client";

/**
 * Todo更新サービス
 * @param {string} id
 * @param {Prisma.TodoUpdateInput} data
 * @param {TodoRepositoryInterface} todoRepository
 * @returns {Promise<Todo>} result
 */
export const updateTodoService = (
  id: string,
  data: Prisma.TodoUpdateInput,
  todoRepository: TodoRepositoryInterface,
): Promise<Todo> => {
  const result = todoRepository.updateTodo(id, data);
  return result;
};
