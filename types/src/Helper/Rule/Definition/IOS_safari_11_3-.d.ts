import RuleInterface from '../RuleInterface';
import Translator from '../../../Translation/Translator';
import Context from '../../../Context/Context';
export default class implements RuleInterface {
    support(context: Context): boolean;
    template(translator: Translator): string;
}
