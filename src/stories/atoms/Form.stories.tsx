import { StoryObj, Meta } from "@storybook/react";
import { Form } from "@/components/atoms/Form";

const meta: Meta<typeof Form> = {
  component: Form,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
