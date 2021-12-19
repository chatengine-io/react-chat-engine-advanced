export const getDateTime = (date: string, timezoneOffset: number = 0) => {
  date = date.replace(/ /g, 'T');

  const year = date.substr(0, 4);
  const month = date.substr(5, 2);
  const day = date.substr(8, 2);
  const hour = date.substr(11, 2);
  const minute = date.substr(14, 2);
  const second = date.substr(17, 2);

  var d = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
  d.setHours(d.getHours() + timezoneOffset);
  return d;
};

export function formatTime(dateTime: Date) {
  var time = dateTime.toLocaleString('en-US');
  return time.split(' ')[1].slice(0, -3) + ' ' + time.slice(-2);
}

export function formatDateTime(dateTime: Date) {
  return dateTime.toLocaleString('en-US')
}
