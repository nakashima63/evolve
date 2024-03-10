import { ApplicationRepositoryInterface } from "@/infrastructures/repositories/applicationRepository";
import { DashboardQueryServiceInterface } from "@/infrastructures/queryservices/dashboards/dashboardQueryService";
import { TodoWithApplication } from "@/infrastructures/queryservices/dashboards/dashboardQueryService";
import { Application } from "@prisma/client";

interface Dashboard {
  todos: TodoWithApplication[];
  applications: Application[];
}

export const getDashboardService = async (
  userId: string,
  dashboardQueryService: DashboardQueryServiceInterface,
  applicationRepository: ApplicationRepositoryInterface,
): Promise<Dashboard> => {
  const todos = await dashboardQueryService.findTodosByUserId(userId);
  const applications =
    await applicationRepository.findApplicationsByUserId(userId);

  const data = {
    todos,
    applications,
  };

  return data;
};
