import { StoryObj, Meta } from "@storybook/react";
import { Tile } from "@/components/atoms/Tile";

const meta: Meta<typeof Tile> = {
  component: Tile,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
