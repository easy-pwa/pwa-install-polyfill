import RuleInterface, { Step } from '../RuleInterface';
import Translator from '../../../Translation/Translator';
import BrowserContext from '../../../Browser/BrowserContext';
import { DotMenuIcon, DotMenuHorizontalIcon, FirefoxAddToHomescreenIcon } from '../../../icons';

export default class Android_firefox_130 implements RuleInterface {
  support(context: BrowserContext): boolean {
    return context.os === 'Android OS' && context.browserName === 'firefox' && context.browserVersion >= 130.0;
  }

  steps(translator: Translator): Step[] {
    return [
      { icon: DotMenuIcon, label: translator.translate('helper.firefox.step1') },
      { icon: DotMenuHorizontalIcon, label: translator.translate('helper.firefox.step2') },
      { icon: FirefoxAddToHomescreenIcon, label: translator.translate('helper.firefox.step3') },
    ];
  }
}
