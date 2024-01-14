import { ReactNode } from "react";
import { createClient } from "@/libs/supabase/server";
import { cookies } from "next/headers";
import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/molecules/Footer";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  const cookieStore = cookies();
  const fetchClient = async () => {
    const supabase = await createClient(cookieStore);
    return supabase;
  };

  const fetchUser = async () => {
    const client = await fetchClient();
    const { data: user } = await client.auth.getUser();
    return user;
  };

  const isAuthenticated = async () => {
    const user = await fetchUser();
    return user !== null;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header isAuthenticated={isAuthenticated} />
      <main className="w-full bg-white flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
