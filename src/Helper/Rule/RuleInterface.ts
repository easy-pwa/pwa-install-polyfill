import BrowserContext from '../../Browser/BrowserContext';
import Translator from '../../Translation/Translator';

export interface Step {
  icon?: string;
  label: string;
}

interface RuleInterface {
  support(context: BrowserContext): boolean;
  steps(translator: Translator): Step[];
}

export default RuleInterface;
