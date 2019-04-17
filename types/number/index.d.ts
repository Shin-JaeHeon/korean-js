import NumberMode from './mode';
export default class Number {
    private static koreanName;
    private static koreanUnitName;
    static toKorean(n: number, mode?: NumberMode): string;
    static toNumber(str: string): number;
    /**
     * @param number
     * @param gukbeon
     * @param split 전화번호 구분자(기본값 : '-')
     * @param split2 국번 구분자(기본값 : '-') : '-'이면 02-XXXX-XXXX, ')'이면 02)XXXX-XXXX
     */
    static toPhoneNumberString(number: number, gukbeon: NumberMode, split?: string, split2?: string): string;
    /**
     * @param number
     * @param gukbeon
     * @param split 전화번호 구분자(기본값 : '-')
     * @param split2 국번 구분자(기본값 : '-') : '-'이면 02-XXXX-XXXX, ')'이면 02)XXXX-XXXX
     */
    static toPhoneNumber(number: string, gukbeon: NumberMode, split?: string, split2?: string): string;
}
