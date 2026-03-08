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

  public translate(key: string, variables: Record<string, string> = {}): string {
    const translations = lang[this.langIdentifier.getBrowserLang()];
    if (translations === undefined) {
      throw new Error('Unsupported language');
    }

    const translation = this.getValueByNestedKey(translations, key);
    if (translation === undefined) {
      throw new Error(`Translation ${key} not found`);
    }

    return Object.entries(variables).reduce(
      (acc, [parameterKey, parameterValue]) => acc.replace(parameterKey, parameterValue),
      translation
    );
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
