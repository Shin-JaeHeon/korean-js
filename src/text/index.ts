import dateMode from './dateMode';
import * as Inko from 'inko';
import * as hanspell from 'hanspell';

declare interface InkoOption {
  allowDoubleConsonant: boolean,
}

declare interface SpellCheckResult {
  type?: string,
  token: string,
  suggestions: Array<string>,
  context?: string,
  info: string
}

export default class Text {
  private static inko = new Inko();

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

  static ko2en(str: string, option: InkoOption = {allowDoubleConsonant: false}): string {
    return this.inko.ko2en(str, option);
  }

  static en2ko(str: string, option: InkoOption = {allowDoubleConsonant: false}): string {
    return this.inko.en2ko(str, option);
  }

  /**
   * 맞춤법 검사
   * @param str 맞춤법 검사를 할 문장
   * @param useDaum 다음 맞춤법 검사기의 사용 여부
   * @param timeout
   */
  static spellCheck(str: string, useDaum = false, timeout = 10000): Promise<Array<SpellCheckResult>> {
    return new Promise((resolve, reject) => {
      (useDaum ? hanspell.spellCheckByDAUM : hanspell.spellCheckByPNU)(str, timeout, result => resolve(result), null, reject);
    });
  }

}
