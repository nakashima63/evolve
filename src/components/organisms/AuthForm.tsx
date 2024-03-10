"use client";
import { Container } from "@/components/atoms/Container";
import { FormItem } from "@/components/molecules/forms/FormItem";
import { InputForm } from "@/components/atoms/InputForm";
import { FormError } from "@/components/molecules/forms/FormError";
import { Button } from "@/components/atoms/Button";
import { TextLink } from "@/components/atoms/TextLink";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  pageType: "register" | "login";
}

interface FormErrors {
  errors: {
    email?: string[];
    password?: string[];
  };
}

const title = {
  register: "アカウントを作成",
  login: "ログイン",
};

const buttonLabel = {
  register: "登録",
  login: "ログイン",
};

const link = {
  register: {
    url: "/login",
    text: "ログイン",
  },
  login: {
    url: "/register",
    text: "アカウントを作成",
  },
};

export const AuthForm = ({ pageType }: Props) => {
  const router = useRouter();
  const [formErrors, setFormErrors] = useState<FormErrors>({ errors: {} });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors({ errors: {} });

    const formElement = e.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);

    const endpoint =
      pageType === "register" ? "/api/auth/register" : "/api/auth/login";

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    console.log("結果を見ます");
    if (res.status === 200 || res.status === 201) {
      console.log("ダッシュボードに遷移します");
      router.push("/dashboard");
    }

    if (res.status === 500) {
      const errorRes = await res.json();
      setFormErrors({ errors: errorRes.errors });
    }
  };

  return (
    <Container>
      <div className="mt-4">
        <h1 className="text-2xl text-zinc-500">{title[pageType]}</h1>
        <div className="mt-4">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <FormItem formId="email" label="Email">
              <InputForm id="email" name="email" type="email" required />
              <FormError
                formId="email"
                errors={formErrors.errors?.email?.flat() ?? []}
              />
            </FormItem>
            <FormItem formId="password" label="Password">
              <InputForm
                id="password"
                name="password"
                type="password"
                required
              />
              <FormError
                formId="password"
                errors={formErrors.errors?.password?.flat() ?? []}
              />
            </FormItem>
            <div className="flex justify-center">
              <Button
                type="submit"
                label={buttonLabel[pageType]}
                className="primary"
              />
            </div>
          </form>
        </div>
        <div className="mt-4 text-center">
          <TextLink href={link[pageType].url} text={link[pageType].text} />
        </div>
      </div>
    </Container>
  );
};
