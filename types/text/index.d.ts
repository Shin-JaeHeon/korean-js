import dateMode from './dateMode';
declare interface InkoOption {
    allowDoubleConsonant: boolean;
}
export default class Text {
    private static inko;
    static dateTime(date: Date, mode?: dateMode[]): string;
    static date(date: Date, mode?: dateMode[]): string;
    static time(date: Date, mode?: dateMode[]): string;
    static ko2en(str: string, option?: InkoOption): string;
    static en2ko(str: string, option?: InkoOption): string;
}
export {};
