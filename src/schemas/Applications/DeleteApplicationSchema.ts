import { z } from "zod";

/**
 * 応募情報削除時のバリデーションスキーマ
 */
export const DeleteApplicationSchema = z.object({
  id: z.string().uuid({ message: "idが渡されていないか不正な値です" }),
});
