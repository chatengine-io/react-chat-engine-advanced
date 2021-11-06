export const getDateTime = (date: string, offset = 0) => {
    if (!date) return '';

    date = date.replace(' ', 'T');
    offset = offset ? offset : 0;

    const year = date.substr(0, 4);
    const month = date.substr(5, 2);
    const day = date.substr(8, 2);
    const hour = date.substr(11, 2);
    const minute = date.substr(14, 2);
    const second = date.substr(17, 2);

    var d = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
    d.setHours(d.getHours() + offset);
    return d;
  };