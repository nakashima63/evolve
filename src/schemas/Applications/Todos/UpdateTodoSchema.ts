import { z } from "zod";
import { taskStatus } from "@prisma/client";

/**
 * Todo更新時のバリデーションスキーマ
 */
export const UpdateTodoSchema = z.object({
  userId: z.string(),
  taskName: z
    .string()
    .max(255, { message: "255文字以内で入力してください" })
    .default(""),
  dueDate: z
    .preprocess(
      (arg) => {
        if (typeof arg === "string") {
          return new Date(arg);
        }
        return arg;
      },
      z
        .date()
        .nullable()
        .refine(
          (val) => {
            return val === null || val >= new Date();
          },
          { message: "未来の日付を入力してください" },
        ),
    )
    .default(null),
  status: z
    .nativeEnum(taskStatus)
    .refine((val) => Object.values(taskStatus).includes(val), {
      message: "存在しないステータスが選択されています",
    })
    .default(taskStatus.NotStarted),
  note: z
    .string()
    .max(2000, { message: "2000文字以内で入力してください" })
    .default(""),
});
