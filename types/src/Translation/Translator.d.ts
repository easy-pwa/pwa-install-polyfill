export default class Translator {
    private static readonly FALLBACK_LANG;
    private readonly lang;
    constructor();
    translate(key: string, variables?: {
        [key: string]: string;
    }): string;
    private getValueByNestedKey;
    private getLangName;
}
