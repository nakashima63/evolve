import { ApplicationRepositoryInterface } from "@/infrastructures/repositories/applicationRepository";
import { Application } from "@prisma/client";

/**
 * @param {ApplicationRepositoryInterface} applicationRepository
 * @returns {Promise<Application>}
 */
export const getApplicationByIdService = (
  id: string,
  applicationRepository: ApplicationRepositoryInterface,
): Promise<Application | null> => {
  return applicationRepository.findApplicationById(id);
};
