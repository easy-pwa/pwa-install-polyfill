import Translator from '../../Translation/Translator';
import RuleInterface from './RuleInterface';

export default class RuleRender {
  public getHelperTemplate(rule: RuleInterface, translator: Translator): string {
    const steps = rule.steps(translator);
    const items = steps.map(({ icon, label }) => {
      const iconHtml = icon ? `<span class="pwa-helper-step-icon">${icon}</span>` : '';
      return `<li class="pwa-helper-step">${iconHtml}<span class="pwa-helper-step-label">${label}</span></li>`;
    }).join('');
    return `<ol class="pwa-helper-steps">${items}</ol>`;
  }
}
