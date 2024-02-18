import prisma from "@/libs/prisma/prisma";
import { Todo } from "@prisma/client";

export interface TodoRepositoryInterface {
  findTodosByApplicationId: (applicationId: string) => Promise<Todo[]>;
}

/**
 * Todoリポジトリ
 * @returns {TodoRepositoryInterface} findTodosByApplicationId
 */
export const todoRepository = (): TodoRepositoryInterface => {
  return {
    /**
     * 応募情報IDでTodoを全件取得
     * @param {string} applicationId
     * @returns {Promise<Todo[]>} result
     */
    findTodosByApplicationId: async (
      applicationId: string,
    ): Promise<Todo[]> => {
      const result: Todo[] = await prisma.todo.findMany({
        where: {
          applicationId: applicationId,
          deletedAt: null,
        },
        orderBy: [{ updatedAt: "desc" }, { createdAt: "desc" }],
      });

      return result;
    },
  };
};
