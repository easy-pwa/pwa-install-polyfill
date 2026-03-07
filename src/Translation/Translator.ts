import lang, { TranslationDict } from './definitions';
import LangIdentifier from './LangIdentifier';

export default class Translator {
  constructor(
    private readonly langIdentifier: LangIdentifier
  ) {
  }

  public isSupportedCurrentLang(): boolean {
    return this.langIdentifier.getBrowserLang() in lang;
  }

  public translate(key: string, variables: { [key: string]: string } = {}): string {
    let translation = this.getValueByNestedKey(lang[this.langIdentifier.getBrowserLang()], key);
    if (translation === undefined) {
      throw new Error(`Translation ${key} not found`);
    }

    for (const [parameterKey, parameterValue] of Object.entries(variables)) {
      translation = translation.replace(parameterKey, parameterValue);
    }

    return translation;
  }

  private getValueByNestedKey(translations: TranslationDict, nestedKey: string): string | undefined {
    let currentValue: string | TranslationDict = translations;
    for (const key of nestedKey.split('.')) {
      if (typeof currentValue === 'string' || !(key in currentValue)) {
        return undefined;
      }
      currentValue = currentValue[key];
    }
    return typeof currentValue === 'string' ? currentValue : undefined;
  }
}
