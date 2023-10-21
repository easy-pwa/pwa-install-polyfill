import RuleInterface from '../RuleInterface';
import Translator from '../../../Translation/Translator';
import BrowserContext from '../../../Browser/BrowserContext';
export default class IOS_safari_11_3 implements RuleInterface {
    support(context: BrowserContext): boolean;
    template(translator: Translator): string;
}
