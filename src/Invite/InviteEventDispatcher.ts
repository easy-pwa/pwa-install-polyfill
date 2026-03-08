import AppInfo from '../App/AppInfo';
import BeforeInstallPromptEvent from './Event/BeforeInstallPromptEvent';
import InviteBannerManager from './InviteBannerManager';
import HelperRenderer from '../Helper/Render/HelperRenderer';

export default class InviteEventDispatcher {
  constructor(
        private readonly inviteBannerManager: InviteBannerManager,
        private readonly helperRenderer: HelperRenderer
  ) {
  }

  public dispatch(appInfo: AppInfo, htmlHelperTemplate: string, answeredCallback: () => void): void {
    let promptHandler!: () => void;
    const userChoicePromise = new Promise<BeforeInstallPromptEventUserChoice>(resolve => {
      promptHandler = (): void => {
        this.helperRenderer.createHelperPopup(htmlHelperTemplate);
        answeredCallback();
        resolve({ outcome: 'accepted', platform: 'web' });
      };
    });

    const event = new BeforeInstallPromptEvent(userChoicePromise, promptHandler);
    window.dispatchEvent(event);

    if (!event.defaultPrevented) {
      this.inviteBannerManager.show(
        appInfo.shortName,
        appInfo.icon,
        promptHandler,
        () => { answeredCallback(); }
      );
    }
  }
}
