import { ApplicationRepositoryInterface } from "@/repositories/applicationRepository";
import { Prisma } from "@prisma/client";
import { Application } from "@prisma/client";

/**
 * 応募情報新規登録サービス
 * @param {ApplicationRepositoryInterface} applicationRepository
 * @returns {Promise<void>} result
 */
export const createApplicationService = (
  data: Prisma.ApplicationCreateInput,
  applicationRepository: ApplicationRepositoryInterface,
): Promise<Application> => {
  const result = applicationRepository.createApplication(data);
  return result;
};
