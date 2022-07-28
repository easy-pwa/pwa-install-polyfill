import definitions from './Definition/definitions';
import Context from '../../Context/Context';
import Translator from '../../Translation/Translator';

export default class RuleFinder {
  public getHelperTemplate(context: Context, translator: Translator): string|null {
    const rule = definitions.find(currentRule => currentRule.support(context));
    if (rule !== undefined) {
      return rule.template(translator);
    }

    return null;
  }
}
