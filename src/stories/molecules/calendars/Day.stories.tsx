import { StoryObj, Meta } from "@storybook/react";
import { Day } from "@/components/molecules/calendars/Day";

const meta: Meta<typeof Day> = {
  component: Day,
  title: "molecules/calendars/Day",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    day: 1,
  },
};
