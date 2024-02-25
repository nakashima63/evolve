import { NextRequest, NextResponse } from "next/server";
import { CreateTodoSchema } from "@/schemas/Applications/Todos/CreateTodoSchema";
import { CreateTodoDto } from "@/dtos/applications/todos/CreateTodoDto";
import { todoRepository } from "@/repositories/applications/todos/todoRepository";
import { createTodoService } from "@/services/todos/createTodoService";

/**
 * Todo登録API
 * @param {NextRequest} req
 * @return {NextResponse} result
 */
export const POST = async (req: NextRequest) => {
  try {
    const validatedFields = CreateTodoSchema.safeParse(await req.json());

    if (!validatedFields.success) {
      return NextResponse.json(
        {
          message: "登録に失敗しました",
          errors: validatedFields.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { applicationId, ...todoData } = validatedFields.data;

    const data = {
      ...todoData,
      application: { connect: { id: applicationId } },
    };

    const createTodoDto = new CreateTodoDto(data);

    await createTodoService(createTodoDto, todoRepository());

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
