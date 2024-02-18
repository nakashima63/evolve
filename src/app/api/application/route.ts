import { applicationRepository } from "@/repositories/applicationRepository";
import { getApplicationsByUserIdService } from "@/services/applications/getApplicationsByUserIdService";
import { ApplicationIndexDto } from "@/dtos/applications/ApplicationIndexDto";
import { NextRequest, NextResponse } from "next/server";

/**
 * 応募情報一覧取得API
 * @param req NextRequest
 * @return NextResponse
 */
export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");
    if (!userId) {
      return NextResponse.json(
        { message: "ユーザーが取得できませんでした", applicationIndexDtos: [] },
        { status: 400 },
      );
    }

    const applications = await getApplicationsByUserIdService(
      userId,
      applicationRepository(),
    );
    const applicationIndexDtos = applications.map(
      (application) => new ApplicationIndexDto(application),
    );

    return NextResponse.json(
      {
        message: "応募情報一覧の取得に成功しました",
        applicationIndexDtos: applicationIndexDtos,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "応募情報一覧の取得に失敗しました", applicationIndexDtos: [] },
      { status: 500 },
    );
  }
};
