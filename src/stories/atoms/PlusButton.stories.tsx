import { StoryObj, Meta } from "@storybook/react";
import { PlusButton } from "@/components/atoms/PlusButton";

const meta: Meta<typeof PlusButton> = {
  component: PlusButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
