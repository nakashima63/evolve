import { AspirationLevel } from "@/types/enums/Applications/AspirationLevel";
import { Status } from "@/types/enums/Applications/Status";

export interface ApplicationInterface {
  id: string;
  companyName: string;
  status: Status;
  aspirationLevel: AspirationLevel;
  applicationRoute: string;
  workLocation: string;
  estimatedIncome: number;
  companyDetail: string;
  contactEmail: string;
  contactPhoneNumber: string;
}
