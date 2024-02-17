import { ApplicationRepositoryInterface } from "@/repositories/applicationRepository";

/**
 * 応募情報削除サービス
 * @param {string} id
 * @param { ApplicationRepositoryInterface } applicationRepository
 * @returns {Promise<void>} void
 */
export const deleteApplicationService = (
  id: string,
  applicationRepository: ApplicationRepositoryInterface,
): Promise<void> => {
  return applicationRepository.deleteApplication(id);
};
