"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dateMode_1 = require("./dateMode");
const Inko = require("inko");
const hanspell = require("hanspell");
class Text {
    static dateTime(date, mode = [dateMode_1.default.SPACE, dateMode_1.default.DATE, dateMode_1.default.SECOND]) {
        if (!mode[1])
            mode[1] = dateMode_1.default.DATE;
        if (!mode[2])
            mode[2] = dateMode_1.default.SECOND;
        return `${this.date(date, mode)}${mode[0]}${this.time(date, [mode[0], mode[2]])}`;
    }
    static date(date, mode = [dateMode_1.default.SPACE, dateMode_1.default.DATE]) {
        if (!mode[1])
            mode[1] = dateMode_1.default.DATE;
        let str = '';
        if (mode[1] !== dateMode_1.default.MONTH_DATE && mode[1] >= dateMode_1.default.YEAR)
            str += `${date.getFullYear()}년${mode[0]}`;
        if (mode[1] >= dateMode_1.default.MONTH)
            str += `${date.getMonth() + 1}월${mode[0]}`;
        if (mode[1] >= dateMode_1.default.DATE)
            str += `${date.getDate()}일`;
        return str;
    }
    static time(date, mode = [dateMode_1.default.SPACE, dateMode_1.default.SECOND]) {
        if (!mode[1])
            mode[1] = dateMode_1.default.SECOND;
        let str = '';
        if (mode[1] >= dateMode_1.default.HOUR)
            str += `${date.getHours()}시${mode[0]}`;
        if (mode[1] >= dateMode_1.default.MINUTES)
            str += `${date.getMinutes()}분${mode[0]}`;
        if (mode[1] >= dateMode_1.default.SECOND)
            str += `${date.getSeconds()}초`;
        return str;
    }
    static ko2en(str, option = { allowDoubleConsonant: false }) {
        return this.inko.ko2en(str, option);
    }
    static en2ko(str, option = { allowDoubleConsonant: false }) {
        return this.inko.en2ko(str, option);
    }
    /**
     * 맞춤법 검사
     * @param str 맞춤법 검사를 할 문장
     * @param useDaum 다음 맞춤법 검사기의 사용 여부
     * @param timeout
     */
    static spellCheck(str, useDaum = false, timeout = 10000) {
        return new Promise((resolve, reject) => {
            (useDaum ? hanspell.spellCheckByDAUM : hanspell.spellCheckByPNU)(str, timeout, result => resolve(result), null, reject);
        });
    }
}
Text.inko = new Inko();
exports.default = Text;
