import { Status, AspirationLevel } from "@prisma/client";
import { PHONE_NUMBER_REGEX } from "@/consts/regexPattern";
import { z } from "zod";

/**
 * 応募情報登録時のバリデーションスキーマ
 */
export const CreateApplicationSchema = z.object({
  userId: z.string(),
  companyName: z
    .string()
    .max(255, { message: "255文字以内で入力してください" })
    .refine(
      (value) => {
        return Boolean(value.trim().length);
      },
      { message: "企業名を入力してください" },
    ),
  status: z
    .nativeEnum(Status)
    .refine((val) => Object.values(Status).includes(val), {
      message: "存在しないステータスが選択されています",
    }),
  aspirationLevel: z
    .nativeEnum(AspirationLevel)
    .refine((val) => Object.values(AspirationLevel).includes(val), {
      message: "存在しない志望度が選択されています",
    }),
  applicationRoute: z
    .string()
    .max(255, { message: "255文字以内で入力してください" })
    .default(""),
  workLocation: z
    .string()
    .max(255, { message: "255文字以内で入力してください" })
    .default(""),
  estimatedIncome: z.coerce
    .number()
    .max(999999999, { message: "999999999以下で入力してください" })
    .nullable(),
  companyDetail: z
    .string()
    .max(2000, { message: "2000文字以内で入力してください" })
    .default(""),
  contactEmail: z
    .string()
    .email({ message: "メールアドレスの形式で入力してください" })
    .optional()
    .or(z.literal("")),
  contactPhoneNumber: z
    .string()
    .max(20, { message: "20文字以内で入力してください" })
    .transform((val) =>
      val
        .replace(/-/g, "")
        .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) =>
          String.fromCharCode(s.charCodeAt(0) - 0xfee0),
        ),
    )
    .refine((val) => PHONE_NUMBER_REGEX.test(val), {
      message: "電話番号の形式で入力してください",
    })
    .optional()
    .or(z.literal("")),
});
