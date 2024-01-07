import React from "react";
import { cookies } from "next/headers";
import { createClient } from "@/libs/supabase/server";
import { redirect } from "next/navigation";
import { AuthForm } from "@/components/templates/AuthForm";

const RegisterPage = () => {
  const signUp = async (formData: FormData): Promise<void> => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        throw error;
      }
    } catch (error) {
      console.error(error);
      return redirect("/register?message=Could not register user.");
    }

    return redirect("/dashboard");
  };

  return <AuthForm action={signUp} pageType="register" />;
};

export default RegisterPage;
