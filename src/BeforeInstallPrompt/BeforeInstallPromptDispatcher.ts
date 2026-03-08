import BeforeInstallPromptEvent from './BeforeInstallPromptEvent';

export default class BeforeInstallPromptDispatcher {
  public dispatch(promptCallback: () => void): BeforeInstallPromptEvent {
    let promptHandler!: () => void;
    const userChoicePromise = new Promise<BeforeInstallPromptEventUserChoice>(resolve => {
      promptHandler = (): void => {
        promptCallback();
        resolve({ outcome: 'accepted', platform: 'web' });
      };
    });

    const event = new BeforeInstallPromptEvent(userChoicePromise, promptHandler);
    window.dispatchEvent(event);
    return event;
  }
}
