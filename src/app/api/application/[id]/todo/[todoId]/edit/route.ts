import { NextRequest, NextResponse } from "next/server";
import { todoRepository } from "@/repositories/applications/todos/todoRepository";
import { UpdateTodoSchema } from "@/schemas/Applications/Todos/UpdateTodoSchema";
import { updateTodoService } from "@/services/todos/updateTodoService";
import { UpdateTodoDto } from "@/dtos/applications/todos/UpdateTodoDto";
import { TodoIndexDto } from "@/dtos/applications/todos/TodoIndexDto";

/**
 * TODO更新API
 * @param {NextRequest} req
 * @return {NextResponse} result
 */
export const PUT = async (req: NextRequest) => {
  try {
    const todoId = req.url.split("/todo/")[1].split("/edit")[0];
    const requestBody = await req.json();
    const validatedFields = UpdateTodoSchema.safeParse({
      ...requestBody,
    });

    if (!validatedFields.success) {
      return NextResponse.json(
        {
          message: "更新に失敗しました",
          todo: {},
          errors: validatedFields.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const updateTodoDto = new UpdateTodoDto(validatedFields.data);

    const updatedTodo = await updateTodoService(
      todoId,
      updateTodoDto,
      todoRepository(),
    );
    const todoIndexDto = new TodoIndexDto(updatedTodo);

    return NextResponse.json(
      { message: "更新に成功しました", todo: todoIndexDto, errors: {} },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "更新に失敗しました", todo: {}, errors: {} },
      { status: 500 },
    );
  }
};
