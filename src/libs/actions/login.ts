"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createClient } from "@/libs/supabase/server";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "パスワードは8文字以上で入力してください",
  }),
});

export interface State {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
}

export const Login = async (prevState: State, formData: FormData) => {
  const validatedFields = FormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten(),
      message: "入力内容が不正です",
    };
  }

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { email, password } = validatedFields.data;
  try {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
  } catch (error) {
    console.error(error);
    return {
      message: "ログインに失敗しました",
    };
  }
  redirect("/dashboard");
};
