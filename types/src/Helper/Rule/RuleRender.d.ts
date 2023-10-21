import Translator from '../../Translation/Translator';
import RuleInterface from './RuleInterface';
export default class RuleRender {
    getHelperTemplate(rule: RuleInterface, translator: Translator): string;
}
