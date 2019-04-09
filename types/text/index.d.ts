import dateMode from "./dateMode";
export default class Text {
    static dateTime(date: Date, mode?: dateMode[]): string;
    static date(date: Date, mode?: dateMode[]): string;
    static time(date: Date, mode?: dateMode[]): string;
}
