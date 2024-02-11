import React from "react";
import { DataItem } from "@/components/molecules/displays/DataItem";
import { ApplicationInterface } from "@/types/interfaces/ApplicationInterface";
import { displayStatus } from "@/types/enums/Applications/Status";
import { displayAspirationLevel } from "@/types/enums/Applications/AspirationLevel";

interface Props {
  id: string;
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
  const application: ApplicationInterface = await fetchApplication(id);
  return (
    <>
      <DataItem title="企業名" size="12">
        {application.companyName || "-"}
      </DataItem>
      <DataItem title="ステータス" size="4">
        {displayStatus(application.status)}
      </DataItem>
      <DataItem title="志望度" size="4">
        {displayAspirationLevel(application.aspirationLevel) || "-"}
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
