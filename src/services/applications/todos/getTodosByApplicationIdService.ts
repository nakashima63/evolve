import { TodoRepositoryInterface } from "@/infrastructures/repositories/applications/todos/todoRepository";
import { Todo } from "@prisma/client";

/**
 * 応募情報ごとのTodo全件取得サービス
 * @param {string} applicationId
 * @param {TodoRepositoryInterface} todoRepository
 * @returns {Promise<Todo[]>} result
 */
export const getTodosByApplicationIdService = (
  applicationId: string,
  todoRepository: TodoRepositoryInterface,
): Promise<Todo[]> => {
  return todoRepository.findTodosByApplicationId(applicationId);
};
