export default class BeforeInstallPromptEvent extends CustomEvent<BeforeInstallPromptEvent> {
  public readonly platforms: string[] = ['web'];

  public readonly userChoice: Promise<BeforeInstallPromptEventUserChoice>;

  readonly #userChoicePromiseResolver: () => void;

  readonly #preventDefaultHandler: () => void;

  constructor(
    userChoicePromise: Promise<BeforeInstallPromptEventUserChoice>,
    userChoicePromiseResolver: () => void,
    preventDefaultHandler: () => void
  ) {
    super('beforeinstallprompt');

    this.userChoice = userChoicePromise;
    this.#userChoicePromiseResolver = userChoicePromiseResolver;
    this.#preventDefaultHandler = preventDefaultHandler;
  }

  public prompt(): Promise<void> {
    this.#userChoicePromiseResolver();
    return Promise.resolve();
  }

  public preventDefault(): void {
    this.#preventDefaultHandler();
  }
}
