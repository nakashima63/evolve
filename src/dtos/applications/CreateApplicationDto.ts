import { Status } from "@/types/enums/Applications/Status";
import { AspirationLevel } from "@/types/enums/Applications/AspirationLevel";
import { Prisma } from "@prisma/client";

export class CreateApplicationDto implements Prisma.ApplicationCreateInput {
  readonly companyName: string;
  readonly status?: Status | null;
  readonly aspirationLevel?: AspirationLevel | null;
  readonly applicationRoute?: string;
  readonly workLocation?: string;
  readonly estimatedIncome?: number | null;
  readonly companyDetail?: string;
  readonly contactEmail?: string;
  readonly contactPhoneNumber?: string;
  readonly user: Prisma.ProfileCreateNestedOneWithoutApplicationsInput;

  /**
   * @param {Prisma.ApplicationCreateInput} data
   * @prop {string} companyName
   * @prop {Status | null} status
   * @prop {AspirationLevel | null} aspirationLevel
   * @prop {string} applicationRoute
   * @prop {string} workLocation
   * @prop {number | null} estimatedIncome
   * @prop {string} companyDetail
   * @prop {string} contactEmail
   * @prop {string} contactPhoneNumber
   * @prop {Prisma.ProfileCreateNestedOneWithoutApplicationsInput} user
   */
  constructor(data: Prisma.ApplicationCreateInput) {
    this.companyName = data.companyName;
    this.status = data.status;
    this.aspirationLevel = data.aspirationLevel;
    this.applicationRoute = data.applicationRoute;
    this.workLocation = data.workLocation;
    this.estimatedIncome = data.estimatedIncome;
    this.companyDetail = data.companyDetail;
    this.contactEmail = data.contactEmail;
    this.contactPhoneNumber = data.contactPhoneNumber;
    this.user = data.user;
  }
}
