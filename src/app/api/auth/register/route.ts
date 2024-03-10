import { createClient } from "@/libs/supabase/server";
import { RegisterSchema } from "@/schemas/Auth/RegisterSchema";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

/**
 * ユーザー登録API
 * @param {NextRequest} req
 * @return {NextResponse}
 */
export const POST = async (req: NextRequest) => {
  const validatedFields = RegisterSchema.safeParse(await req.json());

  if (!validatedFields.success) {
    return NextResponse.json(
      {
        message: "登録に失敗しました",
        errors: validatedFields.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { email, password } = validatedFields.data;
  try {
    const { error: signUpError } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (signUpError) {
      console.error("登録エラー:", signUpError.message);
      return NextResponse.json(
        { message: "登録に失敗しました", errors: signUpError.message },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "登録に成功しました", errors: {} },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "登録に失敗しました", errors: {} },
      { status: 500 },
    );
  }
};
