import prisma from "@/libs/prisma/prisma";
import { Application, Todo } from "@prisma/client";

export interface TodoWithApplication extends Todo {
  application: Application;
}

export interface DashboardQueryServiceInterface {
  findTodosByUserId: (userId: string) => Promise<TodoWithApplication[]>;
}

/**
 * ダッシュボードクエリサービス
 * @returns {DashboardQueryServiceInterface} findTodosByUserId
 */
export const dashboardQueryService = (): DashboardQueryServiceInterface => {
  return {
    /**
     * ユーザーごとのTodoを全件取得
     * @param {string} userId
     * @returns {Promise<TodoWithApplication[]>} result
     */
    findTodosByUserId: async (userId: string) => {
      const result = await prisma.todo.findMany({
        where: {
          application: {
            userId: userId,
            deletedAt: null,
          },
          deletedAt: null,
        },
        include: {
          application: true,
        },
        orderBy: [
          { dueDate: "asc" },
          { createdAt: "asc" },
          { updatedAt: "asc" },
        ],
      });

      return result;
    },
  };
};
