import { StoryObj, Meta } from "@storybook/react";
import { UserIcon } from "@/components/atoms/UserIcon";

const meta: Meta<typeof UserIcon> = {
  component: UserIcon,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
