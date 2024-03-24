import { Container } from "@/components/atoms/Container";
import { DashboardInterface } from "@/types/interfaces/dashboardInterface";
import { fetchAuthUser } from "@/libs/supabase/shared/fetchAuthUser";
import { buildClient } from "@/libs/supabase/server";
import { TodoSection } from "./TodoSection";
import { ApplicationSection } from "./ApplicationSection";

const fetchDashboardDataByUserId = async (
  userId: string,
): Promise<DashboardInterface> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard?userId=${userId}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
    },
  );

  if (res.status === 200) {
    const data: { dashboard: DashboardInterface } = await res.json();
    return data.dashboard;
  }

  return { todos: [], applications: [] };
};

const DashboardPage = async () => {
  const supabase = await buildClient();
  const user = await fetchAuthUser(supabase);

  let dashboardDatas: DashboardInterface = { todos: [], applications: [] };
  if (user) {
    dashboardDatas = await fetchDashboardDataByUserId(user.id);
  }
  const { todos, applications } = dashboardDatas;

  return (
    <Container>
      <div className="py-4">
        <h1 className="mb-2">ダッシュボード</h1>
      </div>
      <TodoSection todos={todos} />
      <ApplicationSection applications={applications} />
    </Container>
  );
};

export default DashboardPage;
