import { createClient } from "@/libs/supabase/server";
import { LoginSchema } from "@/schemas/Auth/LoginSchema";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

/**
 * ログインAPI
 * @param {NextRequest} req
 * @return {NextResponse}
 */
export const POST = async (req: NextRequest) => {
  const validatedFields = LoginSchema.safeParse(await req.json());

  if (!validatedFields.success) {
    return NextResponse.json(
      {
        message: "ログインに失敗しました",
        errors: validatedFields.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { email, password } = validatedFields.data;
  try {
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (signInError) {
      console.error("ログインエラー:", signInError.message);
      return NextResponse.json(
        { message: "ログインに失敗しました", errors: signInError.message },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "ログインに成功しました", errors: {} },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "ログインに失敗しました", errors: {} },
      { status: 500 },
    );
  }
};
