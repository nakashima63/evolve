import { ApplicationRepositoryInterface } from "@/repositories/applicationRepository";
import { Prisma } from "@prisma/client";

/**
 * 応募情報更新サービス
 * @param {string} id
 * @param {Prisma.ApplicationUpdateInput} data
 * @param { ApplicationRepositoryInterface } applicationRepository
 * @returns {Promise<void>} void
 */
export const updateApplicationService = (
  id: string,
  data: Prisma.ApplicationUpdateInput,
  applicationRepository: ApplicationRepositoryInterface,
): Promise<void> => {
  return applicationRepository.updateApplication(id, data);
};
