import { ApplicationRepositoryInterface } from "@/repositories/applicationRepository";
import { Application } from "@prisma/client";

/**
 * @param {ApplicationRepositoryInterface} applicationRepository
 * @returns {Promise<Application[]>}
 */
export const getApplicationsByUserIdService = (
  userId: string,
  applicationRepository: ApplicationRepositoryInterface,
): Promise<Application[]> => {
  return applicationRepository.findApplicationsByUserId(userId);
};
