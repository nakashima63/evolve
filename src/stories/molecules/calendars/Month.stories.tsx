import { StoryObj, Meta } from "@storybook/react";
import { Month } from "@/components/molecules/calendars/Month";
import dayjs from "dayjs";

const meta: Meta<typeof Month> = {
  component: Month,
  title: "molecules/calendars/Month",
};

export default meta;
type Story = StoryObj<typeof meta>;

const month = [
  [
    dayjs(new Date(2024, 0, 1)),
    dayjs(new Date(2024, 0, 2)),
    dayjs(new Date(2024, 0, 3)),
    dayjs(new Date(2024, 0, 4)),
    dayjs(new Date(2024, 0, 5)),
    dayjs(new Date(2024, 0, 6)),
    dayjs(new Date(2024, 0, 7)),
  ],
  [
    dayjs(new Date(2024, 0, 8)),
    dayjs(new Date(2024, 0, 9)),
    dayjs(new Date(2024, 0, 10)),
    dayjs(new Date(2024, 0, 11)),
    dayjs(new Date(2024, 0, 12)),
    dayjs(new Date(2024, 0, 13)),
    dayjs(new Date(2024, 0, 14)),
  ],
  [
    dayjs(new Date(2024, 0, 15)),
    dayjs(new Date(2024, 0, 16)),
    dayjs(new Date(2024, 0, 17)),
    dayjs(new Date(2024, 0, 18)),
    dayjs(new Date(2024, 0, 19)),
    dayjs(new Date(2024, 0, 20)),
    dayjs(new Date(2024, 0, 21)),
  ],
  [
    dayjs(new Date(2024, 0, 22)),
    dayjs(new Date(2024, 0, 23)),
    dayjs(new Date(2024, 0, 24)),
    dayjs(new Date(2024, 0, 25)),
    dayjs(new Date(2024, 0, 26)),
    dayjs(new Date(2024, 0, 27)),
    dayjs(new Date(2024, 0, 28)),
  ],
  [
    dayjs(new Date(2024, 0, 29)),
    dayjs(new Date(2024, 0, 30)),
    dayjs(new Date(2024, 0, 31)),
    dayjs(new Date(2024, 1, 1)),
    dayjs(new Date(2024, 1, 2)),
    dayjs(new Date(2024, 1, 3)),
    dayjs(new Date(2024, 1, 4)),
  ],
];

export const Default: Story = {
  args: {
    month: month,
  },
};
