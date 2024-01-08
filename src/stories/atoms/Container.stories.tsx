import { StoryObj, Meta } from "@storybook/react";
import { Container } from "@/components/atoms/Container";

const meta: Meta<typeof Container> = {
  component: Container,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
