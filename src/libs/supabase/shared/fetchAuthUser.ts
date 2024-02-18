import { SupabaseClient, User } from "@supabase/supabase-js";

/**
 * supabaseから認証済みのユーザーを取得する
 * supabaseのライブラリを使用しているため、関数名にfetchを使用している
 *
 * @param {SupabaseClient} client
 * @returns {User | null}
 */
export const fetchAuthUser = async (
  client: SupabaseClient,
): Promise<User | null> => {
  const {
    data: { user },
  } = await client.auth.getUser();
  return user;
};
