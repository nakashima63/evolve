import { StoryObj, Meta } from "@storybook/react";
import { HeaderLogo } from "../../components/atoms/HeaderLogo";

const meta: Meta<typeof HeaderLogo> = {
  component: HeaderLogo,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
