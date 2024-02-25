import prisma from "@/libs/prisma/prisma";
import { Prisma, Todo } from "@prisma/client";

export interface TodoRepositoryInterface {
  findTodosByApplicationId: (applicationId: string) => Promise<Todo[]>;
  createTodo: (data: Prisma.TodoCreateInput) => Promise<Todo>;
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

    /**
     * Todoを新規登録
     * @param {Prisma.TodoCreateInput} data
     * @returns {Promise<Todo>} result
     */
    createTodo: async (data: Prisma.TodoCreateInput): Promise<Todo> => {
      const result: Todo = await prisma.todo.create({
        data: {
          ...data,
        },
      });

      return result;
    },
  };
};
