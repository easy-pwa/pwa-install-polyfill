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

  public dispatch(appInfo: AppInfo, htmlHelperTemplate: string, answeredCallback: Function): void {
    let acceptedUserChoicePromiseResolver!: Function;
    const userChoicePromise = new Promise<BeforeInstallPromptEventUserChoice>(resolve => {
      acceptedUserChoicePromiseResolver = (): void => {
        this.helperRenderer.createHelperPopup(htmlHelperTemplate);
        answeredCallback();
        resolve({ outcome: 'accepted', platform: 'web' });
      };
    });

    this.inviteBannerManager.trigger(
      appInfo.shortName,
      appInfo.icon,
      acceptedUserChoicePromiseResolver,
      () => { answeredCallback(); }
    );

    this.dispatchBeforeInstallPromptEvent(userChoicePromise, acceptedUserChoicePromiseResolver);
  }

  private dispatchBeforeInstallPromptEvent(
    userChoicePromise: Promise<BeforeInstallPromptEventUserChoice>,
    userChoicePromiseResolver: Function
  ): void {
    window.dispatchEvent(new BeforeInstallPromptEvent(
      userChoicePromise,
      userChoicePromiseResolver,
      () => { this.inviteBannerManager.cancel(); }
    ));
  }
}
