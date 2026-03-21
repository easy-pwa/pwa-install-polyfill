import RuleInterface, { Step } from '../RuleInterface';
import Translator from '../../../Translation/Translator';
import BrowserContext from '../../../Browser/BrowserContext';
import { IosMenuIcon } from '../../../icons';

export default class IOS_safari_11_3 implements RuleInterface {
  support(context: BrowserContext): boolean {
    return context.os === 'iOS'
            && (context.browserName === 'safari' || context.browserName === 'ios')
            && context.browserVersion >= 11.3;
  }

  steps(translator: Translator): Step[] {
    return [
      { icon: IosMenuIcon, label: translator.translate('helper.ios.step1') },
      { label: translator.translate('helper.ios.step2') },
      { label: translator.translate('helper.ios.step3') },
    ];
  }
}
