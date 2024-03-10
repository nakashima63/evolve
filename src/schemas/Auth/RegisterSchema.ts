import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "パスワードは8文字以上で入力してください",
  }),
});
