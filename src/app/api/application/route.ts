import prisma from "@/libs/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");
    console.log(userId);
    if (!userId) {
      return NextResponse.json(
        { message: "ユーザーが取得できませんでした", applications: [] },
        { status: 400 },
      );
    }

    const applications = await prisma.application.findMany({
      where: {
        userId: userId,
        deletedAt: null,
      },
      orderBy: [{ updatedAt: "desc" }, { createdAt: "desc" }],
      select: {
        id: true,
        companyName: true,
        status: true,
        workLocation: true,
        applicationRoute: true,
      },
    });

    return NextResponse.json(
      {
        message: "応募情報一覧の取得に成功しました",
        applications: applications,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "応募情報一覧の取得に失敗しました", applications: [] },
      { status: 500 },
    );
  }
};
