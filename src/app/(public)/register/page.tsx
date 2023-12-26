import React from "react";
import { cookies } from "next/headers";
import { createClient } from "@/libs/supabase/server";
import { redirect } from "next/navigation";

const RegisterPage = () => {
  const signUp = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    console.log(email);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error(error);
      return redirect("/register?message=Could not authenticate user.");
    }

    return redirect("/");
  };

  return (
    <div>
      <form action={signUp}>
        <input type="email" name="email" required />
        <input type="password" name="password" />
        <button type="submit">登録</button>
      </form>
    </div>
  );
};

export default RegisterPage;
