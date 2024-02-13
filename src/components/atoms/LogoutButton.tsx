"use client";
import { createClient } from "@/libs/supabase/client";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const { error } = await createClient().auth.signOut();
      if (error) {
        throw error;
      }
    } catch (error) {
      alert("ログアウトに失敗しました");
    }
    router.push("/");
    router.refresh();
  };

  return <button onClick={handleLogout}>ログアウト</button>;
};
