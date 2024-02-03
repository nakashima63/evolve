import prisma from "@/libs/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Application } from "@prisma/client";

export const POST = async (req: NextRequest) => {
  try {
    const {
      userId,
      companyName = "",
      status,
      aspirationLevel,
      applicationRoute = "",
      workLocation = "",
      estimatedIncome = null,
      companyDetail = "",
      contactEmail = "",
      contactPhoneNumber = "",
    } = await req.json();

    await prisma.application.create({
      data: {
        userId: userId,
        companyName: companyName,
        status: status,
        aspirationLevel: aspirationLevel,
        applicationRoute: applicationRoute,
        workLocation: workLocation,
        estimatedIncome: estimatedIncome ? parseInt(estimatedIncome) : null,
        companyDetail: companyDetail,
        contactEmail: contactEmail,
        contactPhoneNumber: contactPhoneNumber,
      } as Application,
    });
    return NextResponse.json(
      { message: "登録に成功しました" },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "登録に失敗しました" },
      { status: 501 },
    );
  }
};
