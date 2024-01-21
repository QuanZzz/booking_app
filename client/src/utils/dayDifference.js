import { MILLISECONDS_PER_DAY } from ".";

export const dayDifference = (date1, date2) => {
  if (!date1 || !date2) {
    return;
  }

  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  return diffDays;
};
