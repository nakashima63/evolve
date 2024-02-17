import { Prisma } from "@prisma/client";
import { AspirationLevel } from "@/types/enums/Applications/AspirationLevel";
import { Status } from "@/types/enums/Applications/Status";

export class UpdateApplicationDto implements Prisma.ApplicationUpdateInput {
  readonly companyName?: string;
  readonly status?: Status | null;
  readonly aspirationLevel?: AspirationLevel | null;
  readonly applicationRoute?: string;
  readonly workLocation?: string;
  readonly estimatedIncome?: number | null;
  readonly companyDetail?: string;
  readonly contactEmail?: string;
  readonly contactPhoneNumber?: string;

  /**
   * @param {Prisma.ApplicationUpdateInput} data
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
  constructor(data: Prisma.ApplicationUpdateInput) {
    this.companyName =
      typeof data.companyName === "object"
        ? data.companyName.set
        : data.companyName;
    this.status =
      typeof data.status === "object" && data.status !== null
        ? data.status.set
        : data.status;
    this.aspirationLevel =
      typeof data.aspirationLevel === "object" && data.aspirationLevel !== null
        ? data.aspirationLevel.set
        : data.aspirationLevel;
    this.applicationRoute =
      typeof data.applicationRoute === "object"
        ? data.applicationRoute.set
        : data.applicationRoute;
    this.workLocation =
      typeof data.workLocation === "object"
        ? data.workLocation.set
        : data.workLocation;
    this.estimatedIncome =
      typeof data.estimatedIncome === "object" && data.estimatedIncome !== null
        ? data.estimatedIncome.set
        : data.estimatedIncome;
    this.companyDetail =
      typeof data.companyDetail === "object"
        ? data.companyDetail.set
        : data.companyDetail;
    this.contactEmail =
      typeof data.contactEmail === "object"
        ? data.contactEmail.set
        : data.contactEmail;
    this.contactPhoneNumber =
      typeof data.contactPhoneNumber === "object"
        ? data.contactPhoneNumber.set
        : data.contactPhoneNumber;
  }
}
