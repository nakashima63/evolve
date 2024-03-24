import { getDashboardService } from "@/services/dashboards/getDashboardService";
import { dashboardQueryService } from "@/infrastructures/queryservices/dashboards/dashboardQueryService";
import { applicationRepository } from "@/infrastructures/repositories/applicationRepository";
import { TodoIndexDto } from "@/dtos/dashboards/TodoIndexDto";
import { ApplicationIndexDto } from "@/dtos/dashboards/ApplicationIndexDto";
import { NextRequest, NextResponse } from "next/server";

/**
 * ダッシュボードに表示するデータ取得用API
 */
export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");
    if (!userId) {
      return NextResponse.json(
        { message: "ユーザーが取得できませんでした", dashboard: {} },
        { status: 400 },
      );
    }

    const dashboardData = await getDashboardService(
      userId,
      dashboardQueryService(),
      applicationRepository(),
    );

    const todoDtos = dashboardData.todos.map((todo) => new TodoIndexDto(todo));

    const applicationDtos = dashboardData.applications.map(
      (application) => new ApplicationIndexDto(application),
    );

    return NextResponse.json(
      {
        message: "ダッシュボードの取得に成功しました",
        dashboard: {
          todos: todoDtos,
          applications: applicationDtos,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "ダッシュボードの取得に失敗しました", dashboard: {} },
      { status: 500 },
    );
  }
};
