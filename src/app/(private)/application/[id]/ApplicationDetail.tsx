import React from "react";
import { DataItem } from "@/components/molecules/displays/DataItem";
import {
  ApplicationDetailDto,
  ApplicationDetailDtoInterface,
} from "@/dtos/applications/ApplicationDetailDto";
import { displayStatus } from "@/types/enums/Applications/Status";
import { displayAspirationLevel } from "@/types/enums/Applications/AspirationLevel";
import { applicationRepository } from "@/infrastructures/repositories/applicationRepository";
import { getApplicationByIdService } from "@/services/applications/getApplicationByIdService";

interface Props {
  id: string;
}

const getApplication = async (id: string) => {
  const application = await getApplicationByIdService(
    id,
    applicationRepository(),
  );

  return new ApplicationDetailDto(application);
};

export const ApplicationDetail = async ({ id }: Props) => {
  const application: ApplicationDetailDtoInterface = await getApplication(id);
  return (
    <>
      <DataItem title="企業名" size="12">
        {application.companyName || "-"}
      </DataItem>
      <DataItem title="ステータス" size="4">
        {application.status ? displayStatus(application.status) : "-"}
      </DataItem>
      <DataItem title="志望度" size="4">
        {application.aspirationLevel
          ? displayAspirationLevel(application.aspirationLevel)
          : "-"}
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
