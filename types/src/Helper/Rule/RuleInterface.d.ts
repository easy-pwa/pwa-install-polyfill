import BrowserContext from '../../Browser/BrowserContext';
import Translator from '../../Translation/Translator';
interface RuleInterface {
    support(context: BrowserContext): boolean;
    template(translator: Translator): string;
}
export default RuleInterface;
