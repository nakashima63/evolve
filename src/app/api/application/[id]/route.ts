import { applicationRepository } from "@/repositories/applicationRepository";
import { getApplicationByIdService } from "@/services/applications/getApplicationByIdService";
import { ApplicationDetailDto } from "@/dtos/applications/ApplicationDetailDto";
import { NextRequest, NextResponse } from "next/server";

/**
 * 応募情報詳細取得API
 * @param req NextRequest
 * @return NextResponse
 */
export const GET = async (req: NextRequest) => {
  try {
    const id = req.url.split("/application/")[1];
    const application = await getApplicationByIdService(
      id,
      applicationRepository(),
    );

    if (!application) {
      return NextResponse.json(
        { message: "応募情報が取得できませんでした", application: {} },
        { status: 400 },
      );
    }

    const dto = new ApplicationDetailDto(application);

    return NextResponse.json(
      {
        message: "応募情報の取得に成功しました",
        application: dto,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "応募情報の取得に失敗しました", application: {} },
      { status: 500 },
    );
  }
};
