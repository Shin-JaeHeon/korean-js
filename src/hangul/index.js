"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hangul = require("hangul-js");
class Hangul {
    static disassemble(str, grouped = false) {
        // @ts-ignore
        return hangul.disassemble(str, grouped);
    }
    static disassembleToString(str) {
        return hangul.disassembleToString(str);
    }
    static assemble(arr) {
        return hangul.assemble(arr);
    }
    static search(a, b) {
        return hangul.search(a, b);
    }
    static rangeSearch(haystack, needle) {
        return hangul.rangeSearch(haystack, needle);
    }
    static isComplete(c) {
        return hangul.isComplete(c);
    }
    static isCompleteAll(str) {
        return hangul.isCompleteAll(str);
    }
    static isConsonant(c) {
        return hangul.isConsonant(c);
    }
    static isConsonantAll(str) {
        return hangul.isConsonantAll(str);
    }
    static isHangul(c) {
        return hangul.isHangul(c);
    }
    static isHangulAll(str) {
        return hangul.isHangulAll(str);
    }
    static isVowel(c) {
        return hangul.isVowel(c);
    }
    static isVowelAll(str) {
        return hangul.isVowelAll(str);
    }
    static isCho(c) {
        return hangul.isCho(c);
    }
    static isChoAll(str) {
        return hangul.isChoAll(str);
    }
    static isJong(c) {
        return hangul.isJong(c);
    }
    static isJongAll(str) {
        return hangul.isJongAll(str);
    }
    static endsWithConsonant(c) {
        return hangul.endsWithConsonant(c);
    }
    /**
     * 옳은 조사를 반환합니다.
     * hangul-js에는 포함되지 않은 함수입니다.
     * @param word 조사를 찾을 단어
     * @param mode 찾을 조사의 종류
     */
    static correctJosa(word, mode) {
        const isEndsWithConsonant = hangul.endsWithConsonant(word);
        if (mode === HangulMode.JuGyeokJosa)
            return isEndsWithConsonant ? '은' : '는';
        else if (mode === HangulMode.MokJeokGyeokJosa)
            return isEndsWithConsonant ? '을' : '를';
        else if (mode === HangulMode.BoGyeokJosa)
            return isEndsWithConsonant ? '이' : '가';
    }
}
/**
 * 한글을 자음/모음으로 분리하여 문자들의 배열로 돌려줍니다. 이 때 한글이 아닌 문자는 그대로 반환됩니다.
 * @param str {string}
 * @param {boolean} grouped
 */
Hangul.Searcher = hangul.Searcher;
exports.default = Hangul;
