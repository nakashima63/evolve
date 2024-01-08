import { StoryObj, Meta } from "@storybook/react";
import { Button } from "@/components/atoms/Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "ボタン",
    className: "primary",
  },
};
