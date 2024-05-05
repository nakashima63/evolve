import { TodoRepositoryInterface } from "@/infrastructures/repositories/applications/todos/todoRepository";
import { Todo } from "@prisma/client";

/**
 * ユーザーごとのTodo全件取得サービス
 * @param {string} userId
 * @param {TodoRepositoryInterface} todoRepository
 * @returns {Promise<Todo[]>} result
 */
export const getTodosByUserIdService = (
  userId: string,
  todoRepository: TodoRepositoryInterface,
): Promise<Todo[]> => {
  return todoRepository.findTodosByUserId(userId);
};
