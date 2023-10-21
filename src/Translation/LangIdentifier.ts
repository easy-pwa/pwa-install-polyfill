export default class LangIdentifier {
  private cachedLang?: string;

  getBrowserLang(): string {
    if (!this.cachedLang) {
      const [currentLang] = navigator.language.split('-');
      this.cachedLang = currentLang;
    }
    return this.cachedLang;
  }
}
