import LangIdentifier from './LangIdentifier';
export default class Translator {
    private readonly langIdentifier;
    constructor(langIdentifier: LangIdentifier);
    isSupportedCurrentLang(): boolean;
    translate(key: string, variables?: {
        [key: string]: string;
    }): string;
    private getValueByNestedKey;
}
