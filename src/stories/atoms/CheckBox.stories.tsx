import { StoryObj, Meta } from "@storybook/react";
import { CheckBox } from "@/components/atoms/CheckBox";

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
