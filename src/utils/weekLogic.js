import { weekMap } from "./weekMap";
import { monthMap } from "./monthMap";

export const setDayUtil = (date, setter, utc) => {
  if (utc) {
    date && setter(weekMap[date.getUTCDay()]);
  } else {
    date && setter(weekMap[date.getDay()]);
  }
};

export const setDateUtil = (date, setter, utc) => {
  if (utc) {
    date &&
      setter(
        date.getUTCDate().toString().length === 1
          ? "0" + date.getUTCDate()
          : date.getUTCDate()
      );
  } else {
    date &&
      setter(
        date.getDate().toString().length === 1
          ? "0" + date.getDate()
          : date.getUTCDate()
      );
  }
};

export const setMonthUtil = (date, setter, utc) => {
  if (utc) {
    date && setter(monthMap[date.getUTCMonth()]);
  } else {
    date && setter(monthMap[date.getMonth()]);
  }
};

export const setYearUtil = (date, setter, utc) => {
  if (utc) {
    date && setter(date.getUTCFullYear());
  } else {
    date && setter(date.getFullYear());
  }
};
