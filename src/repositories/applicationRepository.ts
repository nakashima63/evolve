import prisma from "@/libs/prisma/prisma";
import { Prisma } from "@prisma/client";
import { Application } from "@prisma/client";

export interface ApplicationRepositoryInterface {
  findApplicationsByUserId: (userId: string) => Promise<Application[]>;
  findApplicationById: (id: string) => Promise<Application | null>;
  createApplication: (
    data: Prisma.ApplicationCreateInput,
  ) => Promise<Application>;
}

/**
 * 応募情報リポジトリ
 * @returns {ApplicationRepositoryInterface} findApplicationsByUserId
 */
export const applicationRepository = (): ApplicationRepositoryInterface => {
  return {
    /**
     * ユーザーごとの応募情報を全件取得
     * @param {string} userId
     * @returns {Promise<Application[]>} result
     */
    findApplicationsByUserId: async (
      userId: string,
    ): Promise<Application[]> => {
      const result: Application[] = await prisma.application.findMany({
        where: {
          userId: userId,
          deletedAt: null,
        },
        orderBy: [{ updatedAt: "desc" }, { createdAt: "desc" }],
      });

      return result;
    },

    /**
     * 応募情報IDで応募情報を取得
     * @param {string} id
     * @returns {Promise<Application | null>} result
     */
    findApplicationById: async (id: string): Promise<Application | null> => {
      const result: Application | null = await prisma.application.findUnique({
        where: {
          id: id,
        },
      });

      return result;
    },

    /**
     * 応募情報を新規作成
     * @param {Prisma.ApplicationCreateInput} data
     * @returns {Promise<Application>} result
     */
    createApplication: async (
      data: Prisma.ApplicationCreateInput,
    ): Promise<Application> => {
      const result: Application = await prisma.application.create({
        data: {
          ...data,
        },
      });

      return result;
    },
  };
};
