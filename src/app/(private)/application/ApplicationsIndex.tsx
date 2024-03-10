import { Tile } from "@/components/organisms/applications/Tile";
import { ApplicationIndexDtoInterface } from "@/dtos/applications/ApplicationIndexDto";
import { fetchAuthUser } from "@/libs/supabase/shared/fetchAuthUser";
import { buildClient } from "@/libs/supabase/server";

console.log("検証を開始します");

const fetchApplicationsByUserId = async (
  userId: string,
): Promise<ApplicationIndexDtoInterface[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/application?userId=${userId}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
    },
  );
  console.log("一覧取得後のレスポンス");
  console.log(res);
  const data: { applicationIndexDtos: ApplicationIndexDtoInterface[] } =
    await res.json();
  return data.applicationIndexDtos;
};

export const ApplicationsIndex = async () => {
  console.log("一覧取得開始");
  const supabase = await buildClient();
  const user = await fetchAuthUser(supabase);

  let applications: ApplicationIndexDtoInterface[] = [];
  if (user) {
    applications = await fetchApplicationsByUserId(user.id);
  }
  console.log("一覧取得できました！");

  return (
    <div className="grid grid-cols-4 gap-2 mb-4">
      {applications.map((application: ApplicationIndexDtoInterface) => (
        <Tile key={application.id} application={application} />
      ))}
    </div>
  );
};
