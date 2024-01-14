"use client";
import { Container } from "@/components/atoms/Container";
import { Form } from "@/components/organisms/Form";
import { FormItem } from "@/components/molecules/FormItem";
import { InputForm } from "@/components/atoms/InputForm";
import { Button } from "@/components/atoms/Button";
import { TextLink } from "@/components/atoms/TextLink";
import { Register } from "@/libs/actions/register";
import { Login } from "@/libs/actions/login";
import { useFormState } from "react-dom";

interface Props {
  pageType: "register" | "login";
}

const action = {
  register: Register,
  login: Login,
};

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
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(action[pageType], initialState);
  return (
    <Container>
      <div className="mt-4">
        <h1 className="text-2xl text-zinc-500">{title[pageType]}</h1>
        <div className="mt-4">
          <Form action={dispatch}>
            <FormItem formId="email" label="Email">
              <InputForm id="email" name="email" type="email" required />
              <div id="email-error" aria-live="polite" aria-atomic="true">
                {state.errors?.email?.flat().map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
              </div>
            </FormItem>
            <FormItem formId="password" label="Password">
              <InputForm
                id="password"
                name="password"
                type="password"
                required
              />
            </FormItem>
            <div className="flex justify-center">
              <Button
                type="submit"
                label={buttonLabel[pageType]}
                className="primary"
              />
            </div>
          </Form>
        </div>
        <div className="mt-4 text-center">
          <TextLink href={link[pageType].url} text={link[pageType].text} />
        </div>
      </div>
    </Container>
  );
};
