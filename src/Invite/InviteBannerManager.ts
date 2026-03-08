import Translator from '../Translation/Translator';
import AppInfo from '../App/AppInfo';

export default class InviteBannerManager {
  constructor(private readonly translator: Translator) {
  }

  public show(appInfo: AppInfo, acceptHandler: () => void, refuseHandler: () => void): void {
    const htmlTemplate = this.template(appInfo);
    this.render(htmlTemplate, acceptHandler, refuseHandler);
  }

  private render(htmlTemplate: string, acceptHandler: () => void, refuseHandler: () => void): void {
    const popupContent = document.createElement('div');
    popupContent.classList.add('pwa-homescreen-invite');
    popupContent.innerHTML = htmlTemplate;

    const closeInvite = (): void => {
      const $invite = document.getElementsByClassName('pwa-homescreen-invite').item(0);
      if ($invite !== null) {
        $invite.remove();
      }
    };

    document.body.appendChild(popupContent);
    const $dismiss = document.getElementById('pwa-homescreen-dismiss');
    if ($dismiss !== null) {
      $dismiss.addEventListener('click', () => {
        refuseHandler();
        closeInvite();
      });
    }
    const $accept = document.getElementById('pwa-homescreen-accept');
    if ($accept !== null) {
      $accept.addEventListener('click', () => {
        acceptHandler();
        closeInvite();
      });
    }
    popupContent.classList.add('pwa-homescreen-invite-active');
  }

  private template(appInfo: AppInfo): string {
    return `
            <div id="pwa-homescreen-icon"><img alt="${appInfo.shortName}" src="${appInfo.icon}" /></div>
            <div id="pwa-homescreen-accept">${this.translator.translate('invite', { '%name%': appInfo.shortName })}</div>
            <div id="pwa-homescreen-dismiss">
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>
            </div>
        `;
  }
}
