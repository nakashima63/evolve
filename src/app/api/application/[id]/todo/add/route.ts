import { NextRequest, NextResponse } from "next/server";
import { CreateTodoSchema } from "@/schemas/Applications/Todos/CreateTodoSchema";
import { CreateTodoDto } from "@/dtos/applications/todos/CreateTodoDto";
import { TodoIndexDto } from "@/dtos/applications/todos/TodoIndexDto";
import { todoRepository } from "@/repositories/applications/todos/todoRepository";
import { createTodoService } from "@/services/todos/createTodoService";

/**
 * Todo登録API
 * @param {NextRequest} req
 * @return {NextResponse} result
 */
export const POST = async (req: NextRequest) => {
  try {
    const applicationId = req.url.split("/application/")[1].split("/todo")[0];
    const validatedFields = CreateTodoSchema.safeParse(await req.json());

    if (!validatedFields.success) {
      return NextResponse.json(
        {
          message: "登録に失敗しました",
          todo: {},
          errors: validatedFields.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = {
      ...validatedFields.data,
      application: { connect: { id: applicationId } },
    };

    const createTodoDto = new CreateTodoDto(data);

    const newTodo = await createTodoService(createTodoDto, todoRepository());
    const todoIndexDto = new TodoIndexDto(newTodo);

    return NextResponse.json(
      { message: "登録に成功しました", todo: todoIndexDto, errors: {} },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "登録に失敗しました", todo: {}, errors: {} },
      { status: 500 },
    );
  }
};
