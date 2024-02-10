import prisma from "@/libs/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

/**
 * 応募情報詳細取得API
 * @param req NextRequest
 * @return NextResponse
 */
export const GET = async (req: NextRequest) => {
  try {
    const id = req.url.split("/application/")[1];
    const application = await prisma.application.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        companyName: true,
        status: true,
        aspirationLevel: true,
        applicationRoute: true,
        workLocation: true,
        estimatedIncome: true,
        companyDetail: true,
        contactEmail: true,
        contactPhoneNumber: true,
      },
    });

    return NextResponse.json(
      {
        message: "応募情報の取得に成功しました",
        application: application,
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
