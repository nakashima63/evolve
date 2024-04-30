import { StoryObj, Meta } from "@storybook/react";
import { Tag } from "@/components/atoms/Tag";

const meta: Meta<typeof Tag> = {
  component: Tag,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Tag",
  },
};
