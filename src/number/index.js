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
        return temp.join('').replace(/[영0].?/g, '').replace(/일([십백천])/g, '$1');
    }
    static toNumber(str) {
        const temp = str.replace(/천백/g, '천일백').replace(/([백])(십)/g, '백일십').split('');
        let sum = 0;
        let is4 = false;
        let digit = 0;
        //@ts-ignore
        return temp.reduce((prev, current, index) => {
            let tempSum = parseInt(prev.join(''));
            switch (this.koreanUnitName.indexOf(current)) {
                case 2:
                    prev[1] = 0;
                case 1:
                    prev[2] = 0;
                case 0:
                    prev[3] = 0;
                    break;
                case 3:
                    break;
                case 4:
                    tempSum *= 10000;
                    is4 = true;
                    break;
                case 5:
                    tempSum *= (10 ** 8);
                    is4 = true;
                    break;
                case 6:
                    tempSum *= (10 ** 12);
                    is4 = true;
                    break;
                case -1:
                    prev[digit++] = (this.koreanName.indexOf(current));
                    break;
            }
            if (is4) {
                sum += tempSum;
                prev = [0];
                is4 = false;
                digit = 0;
            }
            return index === temp.length - 1 ? sum + parseInt(prev.join('')) : prev;
        }, [0]);
    }
    /**
     * @param number
     * @param gukbeon
     * @param split 전화번호 구분자(기본값 : '-')
     * @param split2 국번 구분자(기본값 : '-') : '-'이면 02-XXXX-XXXX, ')'이면 02)XXXX-XXXX
     */
    static toPhoneNumberString(number, gukbeon, split = '', split2 = '') {
        const temp = number.toString().split('').map(num => this.koreanName[num]);
        temp.splice(4, 0, split);
        return `공${gukbeon.toString().split('').map(n => this.koreanName[n]).join('')}${split2}${temp.join('')}`;
    }
    /**
     * @param number
     * @param gukbeon
     * @param split 전화번호 구분자(기본값 : '-')
     * @param split2 국번 구분자(기본값 : '-') : '-'이면 02-XXXX-XXXX, ')'이면 02)XXXX-XXXX
     */
    static toPhoneNumber(number, gukbeon, split = '-', split2 = '-') {
        const temp = number.toString().replace(/륙/g, '육').split('').map(num => this.koreanName.indexOf(num).toString());
        temp.splice(4, 0, split);
        return `0${gukbeon}${split2}${temp.join('')}`;
    }
}
Number.koreanName = ['공', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
Number.koreanUnitName = ['십', '백', '천', '', '만', '억', '조'];
exports.default = Number;
