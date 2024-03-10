import { NextRequest, NextResponse } from "next/server";
import { UpdateApplicationSchema } from "@/schemas/Applications/UpdateApplicationSchema";
import { applicationRepository } from "@/infrastructures/repositories/applicationRepository";
import { updateApplicationService } from "@/services/applications/updateApplicationService";
import { UpdateApplicationDto } from "@/dtos/applications/UpdateApplicationDto";

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

    const updateApplicationDto = new UpdateApplicationDto(validatedFields.data);
    await updateApplicationService(
      id,
      updateApplicationDto,
      applicationRepository(),
    );

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
