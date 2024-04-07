import { StoryObj, Meta } from "@storybook/react";
import { Day } from "@/components/molecules/calendars/Day";
import dayjs from "dayjs";

const meta: Meta<typeof Day> = {
  component: Day,
  title: "molecules/calendars/Day",
};

export default meta;
type Story = StoryObj<typeof meta>;

const day = dayjs(new Date(2024, 0, 1));

export const Default: Story = {
  args: {
    day: day,
  },
};
