import { Container } from "@/components/atoms/Container";
import { DashboardInterface } from "@/types/interfaces/dashboardInterface";
import { fetchAuthUser } from "@/libs/supabase/shared/fetchAuthUser";
import { buildClient } from "@/libs/supabase/server";
import { TodoSection } from "./TodoSection";
import { ApplicationSection } from "./ApplicationSection";
import { getDashboardService } from "@/services/dashboards/getDashboardService";
import { dashboardQueryService } from "@/infrastructures/queryservices/dashboards/dashboardQueryService";
import { applicationRepository } from "@/infrastructures/repositories/applicationRepository";
import { TodoIndexDto } from "@/dtos/dashboards/TodoIndexDto";
import { ApplicationIndexDto } from "@/dtos/dashboards/ApplicationIndexDto";

const fetchDashboardDataByUserId = async (
  userId: string,
): Promise<DashboardInterface> => {
  const { todos, applications } = await getDashboardService(
    userId,
    dashboardQueryService(),
    applicationRepository(),
  );

  const todoDtos = todos.map((todo) => new TodoIndexDto(todo));
  const applicationDtos = applications.map(
    (application) => new ApplicationIndexDto(application),
  );

  return { todos: todoDtos, applications: applicationDtos };
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
