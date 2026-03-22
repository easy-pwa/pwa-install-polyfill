import AppInfo from '../App/AppInfo';
import Translator from '../Translation/Translator';

export default class PromptRenderer {
  constructor(private readonly translator: Translator) {}

  public showPrompt(appInfo: AppInfo): Promise<BeforeInstallPromptEventUserChoice> {
    return new Promise(resolve => {
      const dialog = document.createElement('div');
      dialog.classList.add('pwa-install-prompt');
      dialog.innerHTML = `
        <div class="pwa-install-prompt-content">
          <div class="pwa-install-prompt-header">
            <img class="pwa-install-prompt-icon" src="${appInfo.icon}" alt="${appInfo.shortName}" />
            <div class="pwa-install-prompt-app-info">
              <div class="pwa-install-prompt-app-name">${appInfo.shortName}</div>
              <div class="pwa-install-prompt-app-domain">${window.location.hostname}</div>
            </div>
          </div>
          <div class="pwa-install-prompt-actions">
            <button class="pwa-install-prompt-cancel">${this.translator.translate('prompt.cancel')}</button>
            <button class="pwa-install-prompt-install">${this.translator.translate('prompt.install')}</button>
          </div>
        </div>
      `;

      const mask = document.createElement('div');
      mask.classList.add('pwa-install-prompt-mask');

      const close = (): void => {
        dialog.remove();
        mask.remove();
        document.body.classList.remove('pwa-install-prompt-active');
      };

      dialog.querySelector('.pwa-install-prompt-cancel')!.addEventListener('click', () => {
        close();
        resolve({ outcome: 'dismissed', platform: '' });
      });

      dialog.querySelector('.pwa-install-prompt-install')!.addEventListener('click', () => {
        close();
        resolve({ outcome: 'accepted', platform: 'web' });
      });

      document.body.appendChild(mask);
      document.body.appendChild(dialog);
      document.body.classList.add('pwa-install-prompt-active');
    });
  }
}
