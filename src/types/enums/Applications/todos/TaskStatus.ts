import { taskStatus as PrismaTaskStatus } from "@prisma/client";

export type TaskStatus = PrismaTaskStatus;

export const taskStatusOptions = [
  { value: "NotStarted", label: "未着手" },
  { value: "InProgress", label: "進行中" },
  { value: "Completed", label: "完了" },
];

export const displayTaskStatus = (TaskStatus: TaskStatus) => {
  return taskStatusOptions.find((option) => option.value === TaskStatus)?.label;
};
