import { Application } from "@prisma/client";
import { Status } from "@/types/enums/Applications/Status";

export interface ApplicationIndexDtoInterface {
  readonly id: string;
  readonly companyName: string;
  readonly status: Status | null;
  readonly workLocation: string;
  readonly applicationRoute: string;
}

export class ApplicationIndexDto implements ApplicationIndexDtoInterface {
  readonly id: string;
  readonly companyName: string;
  readonly status: Status | null;
  readonly workLocation: string;
  readonly applicationRoute: string;

  /**
   * @param {Application} application
   * @prop {string} id
   * @prop {string} companyName
   * @prop {Status | null} status
   * @prop {string} workLocation
   * @prop {string} applicationRoute
   */
  constructor(application: Application) {
    this.id = application.id;
    this.companyName = application.companyName;
    this.status = application.status;
    this.workLocation = application.workLocation;
    this.applicationRoute = application.applicationRoute;
  }
}
