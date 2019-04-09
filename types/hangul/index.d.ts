import HangulMode from "./HangulMode";
export default class Hangul {
    /**
     * 한글을 자음/모음으로 분리하여 문자들의 배열로 돌려줍니다. 이 때 한글이 아닌 문자는 그대로 반환됩니다.
     * @param str {string}
     * @param {boolean} grouped
     */
    static Searcher: typeof Searcher;
    static disassemble(str: string, grouped?: boolean): string[] | string[][];
    static disassembleToString(str: string): string;
    static assemble(arr: string[]): string;
    static search(a: string, b: string): number;
    static rangeSearch(haystack: string, needle: string): number[][];
    static isComplete(c: string): boolean;
    static isCompleteAll(str: string): boolean;
    static isConsonant(c: string): boolean;
    static isConsonantAll(str: string): boolean;
    static isHangul(c: string): boolean;
    static isHangulAll(str: string): boolean;
    static isVowel(c: string): boolean;
    static isVowelAll(str: string): boolean;
    static isCho(c: string): boolean;
    static isChoAll(str: string): boolean;
    static isJong(c: string): boolean;
    static isJongAll(str: string): boolean;
    static endsWithConsonant(c: string): boolean;
    /**
     * 옳은 조사를 반환합니다.
     * hangul-js에는 포함되지 않은 함수입니다.
     * @param word 조사를 찾을 단어
     * @param mode 찾을 조사의 종류
     */
    static correctJosa(word: string, mode: HangulMode): string;
}
