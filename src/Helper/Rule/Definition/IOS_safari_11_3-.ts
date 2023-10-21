import RuleInterface from '../RuleInterface';
import Translator from '../../../Translation/Translator';
import BrowserContext from '../../../Browser/BrowserContext';
import IosMenuIcon from '../../../../resource/icons/ios_menu.svg';

export default class IOS_safari_11_3 implements RuleInterface {
  support(context: BrowserContext): boolean {
    return context.os === 'iOS'
            && (context.browserName === 'safari' || context.browserName === 'ios')
            && context.browserVersion >= 11.3;
  }

  template(translator: Translator): string {
    return `
            <div>
                ${translator.translate('helper.introduction')}, ${translator.translate('press_on')}
                ${IosMenuIcon}
                ${translator.translate('then')} <q>${translator.translate('helper.ios.label')}</q>.
            </div>
        `;
  }
}
