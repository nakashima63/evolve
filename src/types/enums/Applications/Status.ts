import { Status as PrismaStatus } from "@prisma/client";

export type Status = PrismaStatus;

const statusOptions = [
  { value: "InformationGathering", label: "情報収集中" },
  { value: "Applied", label: "応募済み" },
  { value: "FirstInterview", label: "一次面接" },
  { value: "SecondInterview", label: "二次面接" },
  { value: "ThirdInterview", label: "三次面接" },
  { value: "Offer", label: "内定" },
  { value: "Rejected", label: "不合格" },
  { value: "Retired", label: "辞退" },
  { value: "Accepted", label: "承諾" },
  { value: "NotAccepted", label: "不承諾" },
  { value: "Waiting", label: "未定" },
  { value: "Other", label: "その他" },
];

export const displayStatus = (status: Status) => {
  return statusOptions.find((option) => option.value === status)?.label;
};
