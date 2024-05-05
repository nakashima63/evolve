import { todoRepository } from "@/infrastructures/repositories/applications/todos/todoRepository";
import { getTodosByUserIdService } from "@/services/applications/todos/getTodosByUserIdService";
import { NextRequest, NextResponse } from "next/server";

/**
 * ユーザーごとのTodoリスト取得API
 * @param req NextRequest
 * @return NextResponse
 */
export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { message: "ユーザーが取得できませんでした", todos: [] },
        { status: 400 },
      );
    }

    const todos = await getTodosByUserIdService(userId, todoRepository());

    return NextResponse.json(
      { message: "Todoリストの取得に成功しました", todos: todos },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Todoリストの取得に失敗しました", todos: [] },
      { status: 500 },
    );
  }
};
