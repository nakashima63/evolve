import { StoryObj, Meta } from "@storybook/react";
import { TextLink } from "@/components/atoms/TextLink";

const meta: Meta<typeof TextLink> = {
  component: TextLink,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/",
    text: "ダッシュボード",
  },
};

export const Small: Story = {
  args: {
    href: "/",
    text: "ダッシュボード",
    size: "sm",
  },
};
