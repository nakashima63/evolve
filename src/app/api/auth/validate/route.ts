import { NextResponse } from "next/server";
import { createClient } from "@/libs/supabase/server";
import { cookies } from "next/headers";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { SupabaseClient } from "@supabase/supabase-js";

const fetchClient = async (
  cookieStore: ReadonlyRequestCookies,
): Promise<SupabaseClient> => {
  const supabase = await createClient(cookieStore);
  return supabase;
};

const fetchUser = async (client: SupabaseClient) => {
  const {
    data: { user },
  } = await client.auth.getUser();
  return user;
};

/**
 * 認証情報の検証API
 * @return {NextResponse}
 */
export const GET = async () => {
  const cookieStore = cookies();

  try {
    const client = await fetchClient(cookieStore);
    const user = await fetchUser(client);

    if (!user) {
      return NextResponse.json(
        { message: "認証情報が取得できませんでした" },
        { status: 401 },
      );
    }

    return NextResponse.json(
      { message: "認証情報の取得に成功しました" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "認証情報の取得に失敗しました" },
      { status: 500 },
    );
  }
};
