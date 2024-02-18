import { Application } from "@prisma/client";
import { Status } from "@/types/enums/Applications/Status";
import { AspirationLevel } from "@/types/enums/Applications/AspirationLevel";

export interface ApplicationDetailDtoInterface {
  readonly id: string;
  readonly companyName: string;
  readonly status: Status | null;
  readonly aspirationLevel: AspirationLevel | null;
  readonly applicationRoute: string;
  readonly workLocation: string;
  readonly estimatedIncome: number | null;
  readonly companyDetail: string;
  readonly contactEmail: string;
  readonly contactPhoneNumber: string;
}

export class ApplicationDetailDto implements ApplicationDetailDtoInterface {
  readonly id: string;
  readonly companyName: string;
  readonly status: Status | null;
  readonly aspirationLevel: AspirationLevel | null;
  readonly applicationRoute: string;
  readonly workLocation: string;
  readonly estimatedIncome: number | null;
  readonly companyDetail: string;
  readonly contactEmail: string;
  readonly contactPhoneNumber: string;

  /**
   * @param {Application} application
   * @prop {string} id
   * @prop {string} companyName
   * @prop {Status | null} status
   * @prop {AspirationLevel | null} aspirationLevel
   * @prop {string} applicationRoute
   * @prop {string} workLocation
   * @prop {number | null} estimatedIncome
   * @prop {string} companyDetail
   * @prop {string} contactEmail
   * @prop {string} contactPhoneNumber
   */
  constructor(application: Application) {
    this.id = application.id;
    this.companyName = application.companyName;
    this.status = application.status;
    this.aspirationLevel = application.aspirationLevel;
    this.applicationRoute = application.applicationRoute;
    this.workLocation = application.workLocation;
    this.estimatedIncome = application.estimatedIncome;
    this.companyDetail = application.companyDetail;
    this.contactEmail = application.contactEmail;
    this.contactPhoneNumber = application.contactPhoneNumber;
  }
}
