import { StoryObj, Meta } from "@storybook/react";
import { Drawer } from "@/components/molecules/displays/Drawer";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: "Molecules/Drawer",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};
