import { detect as BrowserDetect } from 'detect-browser';
import BrowserContext from './BrowserContext';
import DebugConfig from '../Debug/DebugConfig';

export default class {
  public getBrowserContext(debug: DebugConfig): null|BrowserContext {
    const browserInfo = BrowserDetect(debug.userAgent);
    if (browserInfo === null || browserInfo.type !== 'browser' || browserInfo.os === null) {
      return null;
    }

    return new BrowserContext(browserInfo.os, browserInfo.name, parseFloat(browserInfo.version));
  }
}
