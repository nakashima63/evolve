import { StoryObj, Meta } from "@storybook/react";
import { AuthForm } from "@/components/organisms/AuthForm";

const meta: Meta<typeof AuthForm> = {
  component: AuthForm,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageType: "register",
  },
};
