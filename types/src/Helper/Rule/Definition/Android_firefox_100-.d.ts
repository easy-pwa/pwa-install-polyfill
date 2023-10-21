import RuleInterface from '../RuleInterface';
import Translator from '../../../Translation/Translator';
import BrowserContext from '../../../Browser/BrowserContext';
export default class Android_firefox_100 implements RuleInterface {
    support(context: BrowserContext): boolean;
    template(translator: Translator): string;
}
