import { StoryObj, Meta } from "@storybook/react";
import { DropdownMenuItem } from "@/components/atoms/DropdownMenuItem";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const meta: Meta<typeof DropdownMenuItem> = {
  component: DropdownMenuItem,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "サンプル",
    href: "/",
  },
  render: (args) => (
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem {...args} />
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
