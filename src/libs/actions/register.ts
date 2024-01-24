"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createClient } from "@/libs/supabase/server";
import prisma from "@/libs/prisma/prisma";

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
  message: string;
}

export const Register = async (prevState: State, formData: FormData) => {
  const validatedFields = FormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "入力内容が不正です",
    };
  }

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { email, password } = validatedFields.data;
  try {
    const { data } = await supabase.auth.signUp({
      email,
      password,
    });

    if (data?.user) {
      await prisma.user.create({
        data: {
          id: data.user.id,
          name: email.split("@")[0],
        },
      });
    }
  } catch (error) {
    return {
      message: "登録に失敗しました",
    };
  }
  redirect("/dashboard");
};
