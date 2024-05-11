import { ApplicationRepositoryInterface } from "@/infrastructures/repositories/applicationRepository";
import { Application } from "@prisma/client";

/**
 * @param {ApplicationRepositoryInterface} applicationRepository
 * @returns {Promise<Application>}
 */
export const getApplicationByIdService = async (
  id: string,
  applicationRepository: ApplicationRepositoryInterface,
): Promise<Application> => {
  try {
    const application = await applicationRepository.findApplicationById(id);

    if (!application) {
      throw new Error("応募情報が取得できませんでした");
    }

    return application;
  } catch (error) {
    throw new Error("応募情報の取得に失敗しました");
  }
};
