import prisma from "@/libs/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Application } from "@prisma/client";
import { UpdateApplicationSchema } from "@/schemas/Applications/UpdateApplicationSchema";

/**
 * 応募情報更新API
 * @param req NextRequest
 * @return NextResponse
 */
export const PUT = async (req: NextRequest) => {
  try {
    const id = req.url.split("/application/")[1].split("/edit")[0];
    const requestBody = await req.json();
    const validatedFields = UpdateApplicationSchema.safeParse({
      ...requestBody,
      id: id,
    });

    if (!validatedFields.success) {
      return NextResponse.json(
        {
          message: "更新に失敗しました",
          errors: validatedFields.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const {
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

    await prisma.application.update({
      where: {
        id: id,
      },
      data: {
        companyName: companyName,
        status: status,
        aspirationLevel: aspirationLevel,
        applicationRoute: applicationRoute,
        workLocation: workLocation,
        estimatedIncome: estimatedIncome,
        companyDetail: companyDetail,
        contactEmail: contactEmail,
        contactPhoneNumber: contactPhoneNumber,
        updatedAt: new Date(),
      } as Application,
    });
    return NextResponse.json(
      { message: "更新に成功しました", errors: {} },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "更新に失敗しました", errors: {} },
      { status: 500 },
    );
  }
};
