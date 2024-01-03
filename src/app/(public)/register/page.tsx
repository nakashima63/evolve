import React from "react";
import { cookies } from "next/headers";
import { createClient } from "@/libs/supabase/server";
import { redirect } from "next/navigation";
import { Container } from "@/components/atoms/Container";
import { FormItem } from "@/components/molecules/FormItem";
import { InputForm } from "@/components/atoms/InputForm";
import { Button } from "@/components/atoms/Button";

const RegisterPage = () => {
  const signUp = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

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
    <Container>
      <div className="p-4">
        <form action={signUp} className="flex flex-col space-y-4">
          <FormItem formId="email" label="Email">
            <InputForm id="email" name="email" type="email" required />
          </FormItem>
          <FormItem formId="password" label="Password">
            <InputForm id="password" name="password" type="password" required />
          </FormItem>
          <Button type="submit" label="登録" className="primary" />
        </form>
      </div>
    </Container>
  );
};

export default RegisterPage;
