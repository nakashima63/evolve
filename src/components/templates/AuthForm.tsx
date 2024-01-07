import { Container } from "@/components/atoms/Container";
import { Form } from "@/components/organisms/Form";
import { FormItem } from "@/components/molecules/FormItem";
import { InputForm } from "@/components/atoms/InputForm";
import { Button } from "@/components/atoms/Button";

interface Props {
  action: (formData: FormData) => Promise<void>;
  pageType: "register" | "logIn";
}

const title = {
  register: "アカウントを作成",
  logIn: "ログイン",
};

const buttonLabel = {
  register: "登録",
  logIn: "ログイン",
};

export const AuthForm = ({ action, pageType }: Props) => {
  return (
    <Container>
      <div className="w-3/4 mt-4">
        <h1 className="text-2xl text-zinc-500">{title[pageType]}</h1>
        <div className="mt-4">
          <Form action={action}>
            <FormItem formId="email" label="Email">
              <InputForm id="email" name="email" type="email" required />
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
      </div>
    </Container>
  );
};
