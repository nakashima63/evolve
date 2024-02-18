import { StoryObj, Meta } from "@storybook/react";
import { DataItem } from "@/components/molecules/displays/DataItem";

const meta: Meta<typeof DataItem> = {
  component: DataItem,
  title: "Molecules/DataItem",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "サンプル",
    size: "12",
    children: "サンプル",
  },
};
