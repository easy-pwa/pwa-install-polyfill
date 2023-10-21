import RuleInterface from '../RuleInterface';
import Translator from '../../../Translation/Translator';
import BrowserContext from '../../../Browser/BrowserContext';
export default class Android_samsung_17_0 implements RuleInterface {
    support(context: BrowserContext): boolean;
    template(translator: Translator): string;
}
