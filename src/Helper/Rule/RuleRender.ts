import Translator from '../../Translation/Translator';
import RuleInterface from './RuleInterface';

export default class RuleRender {
  public getHelperTemplate(rule: RuleInterface, translator: Translator): string {
    return rule.template(translator);
  }
}
