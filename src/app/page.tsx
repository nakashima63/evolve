import { createClient } from "@/libs/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const client = await createClient(cookieStore);

  const {
    data: { user },
  } = await client.auth.getUser();

  return (
    <main>
      {user ? (
        <button>ログアウト</button>
      ) : (
        <div>
          <a href="/login">ログイン</a>
          <a href="/register">ユーザ登録</a>
        </div>
      )}
    </main>
  );
}
