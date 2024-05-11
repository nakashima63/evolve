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
  try {
    const todos = todoRepository.findTodosByApplicationId(applicationId);
    return todos;
  } catch (error) {
    throw new Error("TODO一覧の取得に失敗しました");
  }
};
