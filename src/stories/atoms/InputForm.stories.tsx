import { StoryObj, Meta } from "@storybook/react";
import { InputForm } from "@/components/atoms/InputForm";

const meta: Meta<typeof InputForm> = {
  component: InputForm,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "sample",
    name: "sample",
  },
};
