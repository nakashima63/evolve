import React from "react";
import { cookies } from "next/headers";
import { createClient } from "@/libs/supabase/server";
import { AuthForm } from "@/components/templates/AuthForm";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const Login = async (formData: FormData): Promise<void> => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        throw error;
      }
    } catch (error) {
      console.error(error);
      return redirect("/login?message=Could not login user.");
    }

    return redirect("/dashboard");
  };

  return <AuthForm action={Login} pageType="login" />;
};

export default LoginPage;
