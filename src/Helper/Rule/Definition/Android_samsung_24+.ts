import RuleInterface, { Step } from '../RuleInterface';
import Translator from '../../../Translation/Translator';
import BrowserContext from '../../../Browser/BrowserContext';
import { BurgerMenuIcon, SamsungAddToIcon } from '../../../icons';

export default class Android_samsung_24 implements RuleInterface {
  support(context: BrowserContext): boolean {
    return context.os === 'Android OS' && context.browserName === 'samsung' && context.browserVersion >= 24.0;
  }

  steps(translator: Translator): Step[] {
    return [
      { icon: BurgerMenuIcon, label: translator.translate('helper.samsung.step1') },
      { icon: SamsungAddToIcon, label: translator.translate('helper.samsung.step2') },
      { label: translator.translate('helper.samsung.step3') },
    ];
  }
}
