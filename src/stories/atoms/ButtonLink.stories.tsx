import { StoryObj, Meta } from "@storybook/react";
import { ButtonLink } from "@/components/atoms/ButtonLink";

const meta: Meta<typeof ButtonLink> = {
  component: ButtonLink,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/",
    label: "ボタン",
  },
};
