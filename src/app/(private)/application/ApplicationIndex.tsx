import { Tile } from "@/components/organisms/applications/Tile";
import { createClient } from "@/libs/supabase/server";
import { cookies } from "next/headers";
import { Status } from "@prisma/client";

const fetchClient = async () => {
  const cookieStore = cookies();
  const supabase = await createClient(cookieStore);
  return supabase;
};

const fetchUserId = async () => {
  const client = await fetchClient();
  const {
    data: { user },
  } = await client.auth.getUser();
  const userId = user?.id;
  return userId;
};

interface Application {
  id: string;
  companyName: string;
  status: Status;
  workLocation: string;
  applicationRoute: string;
}

const fetchApplications = async () => {
  const userId = await fetchUserId();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/application?userId=${userId}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
    },
  );
  const data = await res.json();
  return data.applications;
};

export const ApplicationIndex = async () => {
  const applications = await fetchApplications();
  return (
    <div className="grid grid-cols-4 gap-2 mb-4">
      {applications.map((application: Application) => (
        <Tile key={application.id} application={application} />
      ))}
    </div>
  );
};
