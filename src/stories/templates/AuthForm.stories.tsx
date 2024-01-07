import { StoryObj, Meta } from "@storybook/react";
import { AuthForm } from "@/components/templates/AuthForm";

const meta: Meta<typeof AuthForm> = {
  component: AuthForm,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    action: (formData: FormData) => Promise.resolve(),
    pageType: "register",
  },
};
