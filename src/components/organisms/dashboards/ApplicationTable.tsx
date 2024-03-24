import { ApplicationIndexDto } from "@/dtos/dashboards/ApplicationIndexDto";
import { displayStatus } from "@/types/enums/Applications/Status";
import { TextLink } from "@/components/atoms/TextLink";

interface Props {
  applications: ApplicationIndexDto[];
}

export const ApplicationTable = ({ applications }: Props) => {
  return (
    <>
      <div className="border border-green-600 border-solid rounded-md">
        <div className="border bg-green-600 border-solid rounded-md p-2 flex justify-between items-center">
          <div className="text-white">応募中の企業</div>
        </div>
        {applications.length > 0 ? (
          <div className="p-2">
            <table className="w-full">
              <thead className="text-green-600 text-left border-b border-zinc-300">
                <tr>
                  <th className="w-5/12">企業名</th>
                  <th className="w-4/12">ステータス</th>
                  <th className="w-3/12">応募経路</th>
                </tr>
              </thead>
              <tbody className="text-zinc-500">
                {applications.map((application, index) => (
                  <tr key={index}>
                    <td className="pt-2">
                      <TextLink
                        href={`application/${application.id}`}
                        text={application.companyName}
                      />
                    </td>
                    <td className="pt-2">
                      {application.status
                        ? displayStatus(application.status)
                        : "-"}
                    </td>
                    <td className="pt-2">{application.applicationRoute}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-2 text-zinc-500">応募中の企業はありません</div>
        )}
      </div>
    </>
  );
};
