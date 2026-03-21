import BeforeInstallPromptEvent from './BeforeInstallPromptEvent';
import PromptRenderer from '../Prompt/PromptRenderer';
import AppInfo from '../App/AppInfo';

export default class BeforeInstallPromptDispatcher {
  constructor(private readonly promptRenderer: PromptRenderer) {}

  public dispatch(appInfo: AppInfo, helperCallback: () => void): BeforeInstallPromptEvent {
    let resolveUserChoice!: (value: BeforeInstallPromptEventUserChoice) => void;
    const userChoicePromise = new Promise<BeforeInstallPromptEventUserChoice>(resolve => {
      resolveUserChoice = resolve;
    });

    const promptHandler = (): void => {
      this.promptRenderer.showPrompt(appInfo).then(result => {
        if (result.outcome === 'accepted') {
          helperCallback();
        }
        resolveUserChoice(result);
      });
    };

    const event = new BeforeInstallPromptEvent(userChoicePromise, promptHandler);
    window.dispatchEvent(event);
    return event;
  }
}
