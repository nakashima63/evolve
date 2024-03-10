import { Application } from "@prisma/client";
import { Status } from "@/types/enums/Applications/Status";

/**
 * 応募情報一覧取得用DTOインターフェース
 * @prop {string} id
 * @prop {string} companyName
 * @prop {Status} status
 * @prop {string} applicationRoute
 */
export interface ApplicationIndexDtoInterface {
  readonly id: string;
  readonly companyName: string;
  readonly status: Status;
  readonly applicationRoute: string;
}

export class ApplicationIndexDto implements ApplicationIndexDtoInterface {
  readonly id: string;
  readonly companyName: string;
  readonly status: Status;
  readonly applicationRoute: string;

  /**
   * @param {Application} application
   * @prop {string} id
   * @prop {string} companyName
   * @prop {Status} status
   * @prop {string} applicationRoute
   */
  constructor(application: Application) {
    this.id = application.id;
    this.companyName = application.companyName;
    this.status = application.status;
    this.applicationRoute = application.applicationRoute;
  }
}
