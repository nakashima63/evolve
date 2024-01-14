import React from "react";
import { createClient } from "@/libs/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const PrivateLayout = async ({ children }: Props) => {
  const cookieStore = cookies();
  const fetchClient = async () => {
    const supabase = await createClient(cookieStore);
    return supabase;
  };

  const fetchUser = async () => {
    const client = await fetchClient();
    const {
      data: { user },
    } = await client.auth.getUser();
    return user;
  };

  const authUser = await fetchUser();
  if (!authUser) {
    redirect("/login");
  }

  return <>{children}</>;
};

export default PrivateLayout;
