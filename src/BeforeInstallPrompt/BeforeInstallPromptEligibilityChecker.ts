export default class BeforeInstallPromptEligibilityChecker {
  public isEligible(): boolean {
    if (!this.hasServiceWorker()) {
      return false;
    }

    if (this.isAppMode()) {
      return false;
    }

    return true;
  }

  private isAppMode(): boolean {
    return (
      window.matchMedia('(display-mode: standalone)').matches
        || ('standalone' in window.navigator && (window.navigator as WindowNavigator).standalone === true)
    );
  }

  private hasServiceWorker(): boolean {
    return 'serviceWorker' in navigator;
  }
}
