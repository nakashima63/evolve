import { NextRequest, NextResponse } from "next/server";
import { CreateApplicationSchema } from "@/schemas/Applications/CreateApplicationSchema";
import { CreateApplicationDto } from "@/dtos/applications/CreateApplicationDto";
import { applicationRepository } from "@/repositories/applicationRepository";
import { createApplicationService } from "@/services/applications/createApplicationService";

/**
 * 応募情報登録API
 * @param req NextRequest
 * @return NextResponse
 */
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

    const { userId, ...applicationData } = validatedFields.data;

    const data = {
      ...applicationData,
      user: { connect: { id: userId } },
    };

    const createApplicationDto = new CreateApplicationDto(data);

    await createApplicationService(
      createApplicationDto,
      applicationRepository(),
    );

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
