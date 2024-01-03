import { ReactNode } from "react";
import { createClient } from "@/libs/supabase/server";
import { cookies } from "next/headers";
import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/molecules/Footer";
import { DropdownMenuItemInterface } from "@/types/DropdownMenuInterface";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  const cookieStore = cookies();
  const fetchClient = async () => {
    const client = await createClient(cookieStore);
    return client;
  };

  const fetchUser = async () => {
    const client = await fetchClient();
    const { data: user } = await client.auth.getUser();
    return user;
  };
  const user = fetchUser();
  const isAuthenticated = user !== null ? true : false;
  const dropdownMenuItems = getDropdownMenuItems(isAuthenticated);

  return (
    <div className="flex flex-col min-h-screen">
      <Header items={dropdownMenuItems} />
      <main className="w-full bg-white flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

const items: DropdownMenuItemInterface[] = [];

const getDropdownMenuItems = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    items.push({ label: "ログアウト", href: "/logout" });
  } else {
    items.push({ label: "ログイン", href: "/login" });
    items.push({ label: "ユーザ登録", href: "/register" });
  }

  return items;
};
