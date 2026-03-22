import { detect as BrowserDetect } from 'detect-browser';
import BrowserContext from './BrowserContext';
import BrowserLanguageDetector from './BrowserLanguageDetector';
import DebugConfig from '../Debug/DebugConfig';

export default class {
  constructor(private readonly languageDetector: BrowserLanguageDetector) {}

  public getBrowserContext(debug: DebugConfig): BrowserContext|undefined {
    const browserInfo = BrowserDetect(debug.userAgent);
    if (browserInfo === null || browserInfo.type !== 'browser' || browserInfo.os === null) {
      return undefined;
    }

    return new BrowserContext(
      browserInfo.os,
      browserInfo.name,
      parseFloat(browserInfo.version),
      this.languageDetector.detect()
    );
  }
}
