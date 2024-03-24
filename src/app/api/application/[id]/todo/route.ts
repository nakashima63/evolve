import { todoRepository } from "@/infrastructures/repositories/applications/todos/todoRepository";
import { getTodosByApplicationIdService } from "@/services/applications/todos/getTodosByApplicationIdService";
import { TodoIndexDto } from "@/dtos/applications/todos/TodoIndexDto";
import { NextRequest, NextResponse } from "next/server";

/**
 * TODO一覧取得API
 * @param {NextRequest} req
 * @return {NextResponse} response
 */
export const GET = async (req: NextRequest) => {
  try {
    const id = req.url.split("/application/")[1].split("/todo")[0];

    if (!id) {
      return NextResponse.json(
        { message: "応募情報IDが取得できませんでした", todos: [] },
        { status: 400 },
      );
    }

    const todos = await getTodosByApplicationIdService(id, todoRepository());
    const todoIndexDtos = todos.map((todo) => new TodoIndexDto(todo));

    return NextResponse.json(
      {
        message: "TODO一覧の取得に成功しました",
        todos: todoIndexDtos,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "TODO一覧の取得に失敗しました", todos: [] },
      { status: 500 },
    );
  }
};
