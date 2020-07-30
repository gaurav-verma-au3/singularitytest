export const setUTCTimeAndDateUtil = (timestamp, setter) => {

  const date = new Date(parseInt(timestamp*1000));
  setter(`${timestamp}`.length ? date.toUTCString() : "");
};

export const setLocalTimeAndDateUtil = (timestamp, setter) => {
  const date = new Date(parseInt(timestamp*1000));
  setter(`${timestamp}`.length ? date : "");
};
