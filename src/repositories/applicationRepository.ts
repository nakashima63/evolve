import prisma from "@/libs/prisma/prisma";
import { Application } from "@prisma/client";

export interface ApplicationRepositoryInterface {
  findApplicationsByUserId: (userId: string) => Promise<Application[]>;
}

/**
 * 応募情報リポジトリ
 * @returns {ApplicationRepositoryInterface} findApplicationsByUserId
 */
export const applicationRepository = (): ApplicationRepositoryInterface => {
  return {
    findApplicationsByUserId: async (
      userId: string,
    ): Promise<Application[]> => {
      return prisma.application.findMany({
        where: {
          userId: userId,
          deletedAt: null,
        },
        orderBy: [{ updatedAt: "desc" }, { createdAt: "desc" }],
      });
    },
  };
};
