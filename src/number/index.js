"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mode_1 = require("./mode");
class Number {
    static toKorean(n, mode) {
        let temp = n.toString().split('');
        if (!mode)
            temp = temp.map((num) => this.koreanName[parseInt(num)]);
        let unitCount = 2;
        temp = temp.reverse().map((num, index) => {
            if (mode === mode_1.default.Unit4) {
                if (index % 4 === 0)
                    return num + this.koreanUnitName[++unitCount];
                else
                    return num;
            }
            else {
                switch (index % 4) {
                    case 0:
                        return num + this.koreanUnitName[++unitCount];
                    case 1:
                        return num + this.koreanUnitName[0];
                    case 2:
                        return num + this.koreanUnitName[1];
                    case 3:
                        return num + this.koreanUnitName[2];
                }
            }
        }).reverse();
        return temp.join('').replace(/영.?/g, '').replace(/0.?/g, '').replace(/일(.)/g, '$1');
    }
}
Number.koreanName = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
Number.koreanUnitName = ['십', '백', '천', '', '만', '억', '조', '경'];
exports.default = Number;
