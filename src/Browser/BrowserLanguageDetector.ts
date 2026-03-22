export default class BrowserLanguageDetector {
  detect(): string {
    const [lang] = navigator.language.split('-');
    return lang;
  }
}
