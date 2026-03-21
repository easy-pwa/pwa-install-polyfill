import AppInfo from '../../App/AppInfo';
import Translator from '../../Translation/Translator';

export default class HelperRenderer {
  constructor(private readonly translator: Translator) {}

  public createHelperPopup(htmlTemplate: string, appInfo: AppInfo): void {
    const title = this.translator.translate('helper.title', { '%app_name%': appInfo.shortName });
    const doneLabel = this.translator.translate('helper.done');

    const popupContent = document.createElement('div');
    popupContent.classList.add('pwa-homescreen-helper');
    popupContent.innerHTML = `
      <h1>${title}</h1>
      <div class="message">${htmlTemplate}</div>
      <div class="actions">
        <button class="button-done">${doneLabel}</button>
      </div>
    `;

    const mask = document.createElement('div');
    mask.classList.add('pwa-homescreen-helper-mask');

    const closeHelper = (): void => {
      document.body.classList.remove('pwa-helper-active');
      popupContent.remove();
      mask.remove();
    };

    popupContent.querySelector('.button-done')!.addEventListener('click', closeHelper);

    document.body.appendChild(popupContent);
    document.body.appendChild(mask);

    document.body.classList.add('pwa-helper-active');
  }
}
