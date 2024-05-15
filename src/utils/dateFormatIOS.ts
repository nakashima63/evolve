export const dateFormatIOS = (date: string): string => {
  const dateObj = new Date(date);
  const year =dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const day =dateObj.getDate();
  const hour =dateObj.getHours();
  const minute =dateObj.getMinutes();

  return `${year}-${month}-${day}T${hour}:${minute}`;
};
