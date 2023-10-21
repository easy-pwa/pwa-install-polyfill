import RuleInterface from '../RuleInterface';
import Translator from '../../../Translation/Translator';
import BrowserContext from '../../../Browser/BrowserContext';
import burgerMenuIcon from '../../../../resource/icons/burger_menu.svg';

export default class Android_samsung_17_0 implements RuleInterface {
  support(context: BrowserContext): boolean {
    return context.os === 'Android OS' && context.browserName === 'samsung' && context.browserVersion >= 17.0;
  }

  template(translator: Translator): string {
    return `
            <div>
                ${translator.translate('helper.introduction')}, ${translator.translate('press_on')}
                ${burgerMenuIcon}
                ${translator.translate('then')}
                <q>${translator.translate('helper.samsung.label_1')}</q>
                ${translator.translate('and_then')} <q>${translator.translate('helper.samsung.label_2')}</q>.
            </div>
        `;
  }
}
