import dateMode from "./dateMode";

export default class Text {
  static dateTime(date: Date, mode = [dateMode.SPACE, dateMode.DATE, dateMode.SECOND]): string {
    if (!mode[1]) mode[1] = dateMode.DATE;
    if (!mode[2]) mode[2] = dateMode.SECOND;
    return `${this.date(date, mode)}${mode[0]}${this.time(date, [mode[0], mode[2]])}`;
  }

  static date(date: Date, mode = [dateMode.SPACE, dateMode.DATE]): string {
    if (!mode[1]) mode[1] = dateMode.DATE;
    let str = '';
    if (mode[1] !== dateMode.MONTH_DATE && mode[1] >= dateMode.YEAR) str += `${date.getFullYear()}년${mode[0]}`;
    if (mode[1] >= dateMode.MONTH) str += `${date.getMonth() + 1}월${mode[0]}`;
    if (mode[1] >= dateMode.DATE) str += `${date.getDate()}일`;
    return str;
  }

  static time(date: Date, mode = [dateMode.SPACE, dateMode.SECOND]): string {
    if (!mode[1]) mode[1] = dateMode.SECOND;
    let str = '';
    if (mode[1] >= dateMode.HOUR) str += `${date.getHours()}시${mode[0]}`;
    if (mode[1] >= dateMode.MINUTES) str += `${date.getMinutes()}분${mode[0]}`;
    if (mode[1] >= dateMode.SECOND) str += `${date.getSeconds()}초`;
    return str;
  }
}
