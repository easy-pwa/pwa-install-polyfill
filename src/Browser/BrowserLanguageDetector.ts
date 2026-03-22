import DebugConfig from '../Debug/DebugConfig';

export default class BrowserLanguageDetector {
  detect(debug: DebugConfig): string {
    if (debug.lang !== undefined) {
      return debug.lang;
    }
    const [lang] = navigator.language.split('-');
    return lang;
  }
}
