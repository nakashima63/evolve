import { Tile } from "@/components/organisms/applications/Tile";
import { ApplicationIndexDtoInterface } from "@/dtos/applications/ApplicationIndexDto";
import { fetchAuthUser } from "@/libs/supabase/shared/fetchAuthUser";
import { buildClient } from "@/libs/supabase/server";
import { getApplicationsByUserIdService } from "@/services/applications/getApplicationsByUserIdService";
import { applicationRepository } from "@/infrastructures/repositories/applicationRepository";
import { ApplicationIndexDto } from "@/dtos/applications/ApplicationIndexDto";

const fetchApplicationsByUserId = async (
  userId: string,
): Promise<ApplicationIndexDtoInterface[]> => {
  const applications = await getApplicationsByUserIdService(
    userId,
    applicationRepository(),
  );
  const ApplicationIndexDtos = applications.map(
    (application) => new ApplicationIndexDto(application),
  );

  return ApplicationIndexDtos;
};

export const ApplicationsIndex = async () => {
  const supabase = await buildClient();
  const user = await fetchAuthUser(supabase);

  let applications: ApplicationIndexDtoInterface[] = [];
  if (user) {
    applications = await fetchApplicationsByUserId(user.id);
  }

  return (
    <div className="grid grid-cols-4 gap-2 mb-4">
      {applications.map((application: ApplicationIndexDtoInterface) => (
        <Tile key={application.id} application={application} />
      ))}
    </div>
  );
};
