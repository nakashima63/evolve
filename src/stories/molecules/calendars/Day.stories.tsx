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
    todos: [
      {
        id: "1",
        taskName: "タスク1",
        dueDate: new Date(2024, 0, 1),
        applicationId: "1",
        status: "InProgress",
        note: "メモ",
        createdBy: "1",
        createdAt: new Date(),
        updatedBy: "1",
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: "2",
        taskName: "タスク2",
        dueDate: new Date(2024, 0, 1),
        applicationId: "1",
        status: "InProgress",
        note: "メモ",
        createdBy: "1",
        createdAt: new Date(),
        updatedBy: "1",
        updatedAt: new Date(),
        deletedAt: null,
      },
    ],
  },
};
