import * as hangul from 'hangul-js';
import HangulMode from './HangulMode';

export default class Hangul {
  /**
   * 한글을 자음/모음으로 분리하여 문자들의 배열로 돌려줍니다. 이 때 한글이 아닌 문자는 그대로 반환됩니다.
   * @param str {string}
   * @param {boolean} grouped
   */
  static Searcher = hangul.Searcher;

  static disassemble(str: string, grouped: boolean = false): string[] | string[][] {
    // @ts-ignore
    return hangul.disassemble(str, grouped);
  }

  static disassembleToString(str: string): string {
    return hangul.disassembleToString(str);
  }

  static assemble(arr: string[]): string {
    return hangul.assemble(arr);
  }

  static search(a: string, b: string): number {
    return hangul.search(a, b);
  }

  static rangeSearch(haystack: string, needle: string): number[][] {
    return hangul.rangeSearch(haystack, needle);
  }

  static isComplete(c: string): boolean {
    return hangul.isComplete(c);
  }

  static isCompleteAll(str: string): boolean {
    return hangul.isCompleteAll(str);
  }

  static isConsonant(c: string): boolean {
    return hangul.isConsonant(c);
  }

  static isConsonantAll(str: string): boolean {
    return hangul.isConsonantAll(str);
  }

  static isHangul(c: string): boolean {
    return hangul.isHangul(c);
  }

  static isHangulAll(str: string): boolean {
    return hangul.isHangulAll(str);
  }

  static isVowel(c: string): boolean {
    return hangul.isVowel(c);
  }

  static isVowelAll(str: string): boolean {
    return hangul.isVowelAll(str);
  }

  static isCho(c: string): boolean {
    return hangul.isCho(c);
  }

  static isChoAll(str: string): boolean {
    return hangul.isChoAll(str);
  }

  static isJong(c: string): boolean {
    return hangul.isJong(c);
  }

  static isJongAll(str: string): boolean {
    return hangul.isJongAll(str);
  }

  static endsWithConsonant(c: string): boolean {
    return hangul.endsWithConsonant(c);
  }

  /**
   * 옳은 조사를 반환합니다.
   * hangul-js에는 포함되지 않은 함수입니다.
   * @param word 조사를 찾을 단어
   * @param mode 찾을 조사의 종류
   */
  static correctJosa(word: string, mode: HangulMode): string {
    const isEndsWithConsonant = hangul.endsWithConsonant(word);
    if (mode === HangulMode.JuGyeokJosa) return isEndsWithConsonant ? '은' : '는';
    else if (mode === HangulMode.MokJeokGyeokJosa) return isEndsWithConsonant ? '을' : '를';
    else if (mode === HangulMode.BoGyeokJosa) return isEndsWithConsonant ? '이' : '가';
    return '';
  }

}
