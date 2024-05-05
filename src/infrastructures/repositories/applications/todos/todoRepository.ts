import prisma from "@/libs/prisma/prisma";
import { Prisma, Todo } from "@prisma/client";

export interface TodoRepositoryInterface {
  findTodosByUserId: (userId: string) => Promise<Todo[]>;
  findTodosByApplicationId: (applicationId: string) => Promise<Todo[]>;
  createTodo: (data: Prisma.TodoCreateInput) => Promise<Todo>;
  updateTodo: (id: string, data: Prisma.TodoUpdateInput) => Promise<Todo>;
}

/**
 * Todoリポジトリ
 * @returns {TodoRepositoryInterface} findTodosByApplicationId
 */
export const todoRepository = (): TodoRepositoryInterface => {
  return {
    /**
     * ユーザごとのTodoを全件取得
     * @param {string} userId
     * @returns {Promise<Todo[]>} result
     */
    findTodosByUserId: async (userId: string): Promise<Todo[]> => {
      const result: Todo[] = await prisma.todo.findMany({
        where: {
          createdBy: userId,
          deletedAt: null,
        },
        orderBy: [
          { dueDate: "asc" },
          { createdAt: "asc" },
          { updatedAt: "asc" },
        ],
      });

      return result;
    },

    /**
     * 応募情報ごとのTodoを全件取得
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
        orderBy: [
          { dueDate: "asc" },
          { createdAt: "asc" },
          { updatedAt: "asc" },
        ],
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

    /**
     * Todoを更新
     * @param {string} id
     * @param {Prisma.TodoUpdateInput}
     * @returns {Promise<Todo>} result
     */
    updateTodo: async (
      id: string,
      data: Prisma.TodoUpdateInput,
    ): Promise<Todo> => {
      const result: Todo = await prisma.todo.update({
        where: {
          id: id,
        },
        data: {
          ...data,
        },
      });

      return result;
    },
  };
};
