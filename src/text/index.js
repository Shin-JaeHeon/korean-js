"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dateMode_1 = require("./dateMode");
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
}
exports.default = Text;
