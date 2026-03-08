export default class BeforeInstallPromptEvent extends CustomEvent<BeforeInstallPromptEvent> {
  public readonly platforms: string[] = ['web'];

  public readonly userChoice: Promise<BeforeInstallPromptEventUserChoice>;

  readonly #promptHandler: () => void;

  constructor(
    userChoicePromise: Promise<BeforeInstallPromptEventUserChoice>,
    promptHandler: () => void,
  ) {
    super('beforeinstallprompt', { cancelable: true });

    this.userChoice = userChoicePromise;
    this.#promptHandler = promptHandler;
  }

  public prompt(): Promise<void> {
    this.#promptHandler();
    return Promise.resolve();
  }
}
