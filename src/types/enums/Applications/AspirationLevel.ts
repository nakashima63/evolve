import { AspirationLevel as PrismaAspirationLevel } from "@prisma/client";

export type AspirationLevel = PrismaAspirationLevel;

const aspirationLevelOptions = [
  { value: "High", label: "高" },
  { value: "Middle", label: "中" },
  { value: "Low", label: "低" },
];

export const displayAspirationLevel = (aspirationLevel: AspirationLevel) => {
  return aspirationLevelOptions.find(
    (option) => option.value === aspirationLevel,
  )?.label;
};
