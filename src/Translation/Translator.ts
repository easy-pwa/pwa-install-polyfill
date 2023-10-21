import lang from './definitions';
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
    if (translation === null) {
      throw new Error(`Translation ${key} not found`);
    }

    for (const [parameterKey, parameterValue] of Object.entries(variables)) {
      translation = translation.replace(parameterKey, parameterValue);
    }

    return translation;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private getValueByNestedKey(translations: any, nestedKey: string): null|string {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let currentValue: any = translations;
    const keys: string[] = nestedKey.split('.');

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      if (!(key in currentValue)) {
        return null;
      }

      currentValue = currentValue[key];
    }

    return currentValue;
  }
}
