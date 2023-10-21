import InviteScheduler from './InviteScheduler';
import Translator from '../Translation/Translator';

export default class InviteEligibilityChecker {
  public constructor(
        private readonly inviteScheduler: InviteScheduler,
        private readonly translator: Translator
  ) {
  }

  public isEligibleToInvite(): boolean {
    if (!this.hasServiceWorkerService()) {
      return false;
    }

    if (!this.translator.isSupportedCurrentLang()) {
      return false;
    }

    if (this.isAppMode()) {
      return false;
    }

    return this.inviteScheduler.isTime();
  }

  private isAppMode(): boolean {
    return (
      window.matchMedia('(display-mode: standalone)').matches
        || ('standalone' in window.navigator && (window.navigator as WindowNavigator).standalone === true)
    );
  }

  private hasServiceWorkerService(): boolean {
    return 'serviceWorker' in navigator;
  }
}
