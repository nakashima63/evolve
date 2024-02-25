import { StoryObj, Meta } from "@storybook/react";
import { ArrowButton } from "@/components/molecules/ArrowButton";

const meta: Meta<typeof ArrowButton> = {
  component: ArrowButton,
  title: "Molecules/ArrowButton",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
