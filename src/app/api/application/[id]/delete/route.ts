import { NextRequest, NextResponse } from "next/server";
import { DeleteApplicationSchema } from "@/schemas/Applications/DeleteApplicationSchema";
import { applicationRepository } from "@/infrastructures/repositories/applicationRepository";
import { deleteApplicationService } from "@/services/applications/deleteApplicationService";

/**
 * 応募情報削除API
 * @param req NextRequest
 * @return NextResponse
 */
export const PUT = async (req: NextRequest) => {
  try {
    const validatedFields = DeleteApplicationSchema.safeParse(await req.json());

    if (!validatedFields.success) {
      return NextResponse.json(
        {
          message: "削除に失敗しました",
          errors: validatedFields.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { id } = validatedFields.data;
    await deleteApplicationService(id, applicationRepository());

    return NextResponse.json(
      { message: "削除に成功しました", errors: {} },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "削除に失敗しました", errors: {} },
      { status: 500 },
    );
  }
};
