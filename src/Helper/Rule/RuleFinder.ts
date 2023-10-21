import RuleInterface from './RuleInterface';
import BrowserContext from '../../Browser/BrowserContext';
import definitions from './Definition/definitions';

export default class RuleFinder {
  public findForContext(context: BrowserContext): RuleInterface|null {
    const list = this.getRuleDefinitions();
    return list.find(currentRule => currentRule.support(context)) ?? null;
  }

  private getRuleDefinitions(): RuleInterface[] {
    return definitions;
  }
}
