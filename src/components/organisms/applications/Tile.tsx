import { Status } from "@prisma/client";

interface Props {
  application: {
    companyName: string;
    status: Status;
    workLocation: string;
    applicationRoute: string;
  };
}

const enumLabel = {
  InformationGathering: "情報収集中",
  Applied: "応募済み",
  FirstInterview: "一次面接",
  SecondInterview: "二次面接",
  ThirdInterview: "三次面接",
  Offer: "内定",
  Rejected: "不合格",
  Retired: "辞退",
  Accepted: "承諾",
  NotAccepted: "不承諾",
  Waiting: "未定",
  Other: "その他",
};

export const Tile = ({ application }: Props) => {
  return (
    <div className="w-full max-w-[260px] mx-auto">
      <div className="border border-green-600 border-solid rounded-md hover:shadow-none hover:translate-y-1 transition-all duration-300 p-2 text-xs">
        <div className="mt-2">
          <p className="mb-2 font-bold">{application.companyName}</p>
          <p className="mb-2">{enumLabel[application.status] || "-"}</p>
          <p className="mb-2">{application.workLocation || "-"}</p>
          <p>{application.applicationRoute || "-"}</p>
        </div>
      </div>
    </div>
  );
};
