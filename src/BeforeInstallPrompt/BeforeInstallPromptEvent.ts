export default class BeforeInstallPromptEvent extends CustomEvent<BeforeInstallPromptEvent> {
  public readonly platforms: string[] = ['web'];

  public readonly userChoice: Promise<BeforeInstallPromptEventUserChoice>;

  readonly #promptHandler: () => void;

  #prompted: boolean = false;

  constructor(
    userChoicePromise: Promise<BeforeInstallPromptEventUserChoice>,
    promptHandler: () => void
  ) {
    super('beforeinstallprompt', { cancelable: true });

    this.userChoice = userChoicePromise;
    this.#promptHandler = promptHandler;
  }

  public prompt(): Promise<BeforeInstallPromptEventUserChoice> {
    if (!this.#prompted) {
      this.#prompted = true;
      this.#promptHandler();
    }
    return this.userChoice;
  }
}
