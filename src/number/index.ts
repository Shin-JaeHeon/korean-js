import NumberMode from './mode';

export default class Number {
  private static koreanName = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
  private static koreanUnitName = ['십', '백', '천', '', '만', '억', '조'];

  static toKorean(n: number, mode?: NumberMode): string {
    let temp = n.toString().split('');
    if (!mode) temp = temp.map((num: string) => this.koreanName[parseInt(num)]);
    let unitCount = 2;
    temp = temp.reverse().map((num: string, index) => {
      if (mode === NumberMode.Unit4) {
        if (index % 4 === 0) return num + this.koreanUnitName[++unitCount];
        else return num;
      } else {
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

  static toNumber(str: string) {
    const temp = str.replace(/천백/g, '천일백').replace(/([백])(십)/g, '백일십').split('');
    let sum = 0;
    let is4 = false;
    let digit = 0;
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
}
