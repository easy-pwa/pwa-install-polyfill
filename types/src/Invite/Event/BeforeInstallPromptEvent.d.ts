export default class BeforeInstallPromptEvent extends CustomEvent<BeforeInstallPromptEvent> {
    #private;
    readonly platforms: string[];
    readonly userChoice: Promise<BeforeInstallPromptEventUserChoice>;
    constructor(userChoicePromise: Promise<BeforeInstallPromptEventUserChoice>, userChoicePromiseResolver: Function, preventDefaultHandler: Function);
    prompt(): Promise<void>;
    preventDefault(): void;
}
