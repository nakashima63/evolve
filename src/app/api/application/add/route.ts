import prisma from "@/libs/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Application } from "@prisma/client";
import { CreateApplicationSchema } from "@/schemas/Applications/CreateApplicationSchema";

export const POST = async (req: NextRequest) => {
  try {
    const validatedFields = CreateApplicationSchema.safeParse(await req.json());

    if (!validatedFields.success) {
      return NextResponse.json(
        {
          message: "登録に失敗しました",
          errors: validatedFields.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const {
      userId,
      companyName,
      status,
      aspirationLevel,
      applicationRoute,
      workLocation,
      estimatedIncome,
      companyDetail,
      contactEmail,
      contactPhoneNumber,
    } = validatedFields.data;

    await prisma.application.create({
      data: {
        userId: userId,
        companyName: companyName,
        status: status,
        aspirationLevel: aspirationLevel,
        applicationRoute: applicationRoute,
        workLocation: workLocation,
        estimatedIncome: estimatedIncome,
        companyDetail: companyDetail,
        contactEmail: contactEmail,
        contactPhoneNumber: contactPhoneNumber,
      } as Application,
    });
    return NextResponse.json(
      { message: "登録に成功しました", errors: {} },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "登録に失敗しました", errors: {} },
      { status: 500 },
    );
  }
};
