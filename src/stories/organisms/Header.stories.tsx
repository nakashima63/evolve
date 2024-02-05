import { StoryObj, Meta } from "@storybook/react";
import { Header } from "@/components/organisms/Header";

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
