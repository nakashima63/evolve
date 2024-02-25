import { z } from "zod";
import { taskStatus } from "@prisma/client";

/**
 * Todo登録時のバリデーションスキーマ
 */
export const CreateTodoSchema = z.object({
  applicationId: z.string(),
  taskName: z
    .string()
    .max(255, { message: "255文字以内で入力してください" })
    .refine(
      (value) => {
        return Boolean(value.trim().length);
      },
      { message: "タスク名を入力してください" },
    ),
  dueDate: z
    .date()
    .nullable()
    .refine(
      (val) => {
        return val === null || val >= new Date();
      },
      { message: "未来の日付を入力してください" },
    ),
  status: z
    .nativeEnum(taskStatus)
    .refine((val) => Object.values(taskStatus).includes(val), {
      message: "存在しないステータスが選択されています",
    }),
  note: z
    .string()
    .max(2000, { message: "2000文字以内で入力してください" })
    .default(""),
});
