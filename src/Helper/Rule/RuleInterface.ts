import Context from '../../Context/Context';
import Translator from '../../Translation/Translator';

interface RuleInterface {
    support(context: Context): boolean;
    template(translator: Translator): string;
}

export default RuleInterface;
