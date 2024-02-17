import { ApplicationIndexDtoInterface } from "@/dtos/applications/ApplicationIndexDto";
import { displayStatus } from "@/types/enums/Applications/Status";
import Link from "next/link";

interface Props {
  application: ApplicationIndexDtoInterface;
}

export const Tile = ({ application }: Props) => {
  return (
    <Link href={`application/${application.id}`}>
      <div className="w-full max-w-[260px] mx-auto">
        <div className="border border-green-600 border-solid rounded-md hover:shadow-none hover:translate-y-1 transition-all duration-300 p-2 text-xs">
          <div className="mt-2">
            <p className="mb-2 font-bold">{application.companyName}</p>
            <p className="mb-2">
              {application.status ? displayStatus(application.status) : "-"}
            </p>
            <p className="mb-2">{application.workLocation || "-"}</p>
            <p>{application.applicationRoute || "-"}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
