import dateMode from './dateMode';
declare interface InkoOption {
    allowDoubleConsonant: boolean;
}
declare interface SpellCheckResult {
    type?: string;
    token: string;
    suggestions: Array<string>;
    context?: string;
    info: string;
}
export default class Text {
    private static inko;
    static dateTime(date: Date, mode?: dateMode[]): string;
    static date(date: Date, mode?: dateMode[]): string;
    static time(date: Date, mode?: dateMode[]): string;
    static ko2en(str: string, option?: InkoOption): string;
    static en2ko(str: string, option?: InkoOption): string;
    /**
     * 맞춤법 검사
     * @param str 맞춤법 검사를 할 문장
     * @param useDaum 다음 맞춤법 검사기의 사용 여부
     * @param timeout
     */
    static spellCheck(str: string, useDaum?: boolean, timeout?: number): Promise<Array<SpellCheckResult>>;
}
export {};
