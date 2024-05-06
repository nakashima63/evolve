import dayjs from "dayjs";

// 指定された月のカレンダー表を生成する関数
export const getMonth = (
  targetMonth: number = dayjs().month(),
): dayjs.Dayjs[][] => {
  const currentYear = dayjs().year();
  // 指定月の最初の日の曜日（0=日曜日, 6=土曜日）
  const firstDayOfWeekInMonth = dayjs(
    new Date(currentYear, targetMonth, 1),
  ).day();

  // カレンダー表示開始日の計算
  let dayCounter = 1 - firstDayOfWeekInMonth;

  // 週ごとに日付情報を含む二次元配列を生成
  const calendarDays = new Array(5).fill(null).map(() => {
    return new Array(7).fill(null).map(() => {
      const hoge = dayjs(new Date(currentYear, targetMonth, dayCounter));
      dayCounter++;
      return hoge;
    });
  });

  return calendarDays;
};
