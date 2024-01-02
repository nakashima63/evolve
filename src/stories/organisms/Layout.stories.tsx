import { StoryObj, Meta } from "@storybook/react";
import { Layout } from "../../components/organisms/Layout";

const meta: Meta<typeof Layout> = {
  component: Layout,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
