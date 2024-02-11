import React from "react";
import { DataItem } from "@/components/molecules/displays/DataItem";
import { AspirationLevel, Status } from "@prisma/client";

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

const aspirationLevelOptions = [
  { value: "High", label: "高" },
  { value: "Middle", label: "中" },
  { value: "Low", label: "低" },
];

interface Props {
  id: string;
}

interface Application {
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

const fetchApplication = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/application/${id}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
    },
  );
  const data = await res.json();
  return data.application;
};

export const ApplicationDetail = async ({ id }: Props) => {
  const application: Application = await fetchApplication(id);
  return (
    <>
      <DataItem title="企業名" size="12">
        {application.companyName || "-"}
      </DataItem>
      <DataItem title="ステータス" size="4">
        {statusOptions.find((option) => option.value === application.status)
          ?.label || ""}
      </DataItem>
      <DataItem title="志望度" size="4">
        {aspirationLevelOptions.find(
          (option) => option.value === application.aspirationLevel,
        )?.label || "-"}
      </DataItem>
      <DataItem title="応募経路" size="4">
        {application.applicationRoute || "-"}
      </DataItem>
      <DataItem title="勤務地" size="12">
        {application.workLocation || "-"}
      </DataItem>
      <DataItem title="想定年収" size="4">
        {application.estimatedIncome || "-"}
      </DataItem>
      <DataItem title="企業詳細" size="12">
        {application.companyDetail || "-"}
      </DataItem>
      <DataItem title="連絡先メールアドレス" size="6">
        {application.contactEmail || "-"}
      </DataItem>
      <DataItem title="連絡先電話番号" size="6">
        {application.contactPhoneNumber || "-"}
      </DataItem>
    </>
  );
};
