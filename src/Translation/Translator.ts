import lang, { TranslationDict } from './definitions';

export default class Translator {
  private currentLanguage?: string;

  public setCurrentLanguage(language: string): void {
    this.currentLanguage = language;
  }

  public isSupportedCurrentLang(): boolean {
    if (this.currentLanguage === undefined) {
      throw new Error('Language has not been set.');
    }
    return this.currentLanguage in lang;
  }

  public translate(key: string, variables: Record<string, string> = {}): string {
    const translations = lang[this.currentLanguage!];
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
