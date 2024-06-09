import dayjs from "dayjs";

export const dateTimeFormat = (date: Date): string => {
  return dayjs(date).format("YYYY/MM/DD HH:mm:ss");
};
