import NumberMode from './mode';
export default class Number {
    private static koreanName;
    private static koreanUnitName;
    static toKorean(n: number, mode?: NumberMode): string;
    static toNumber(str: string): number | number[];
}
