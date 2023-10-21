import Translator from '../Translation/Translator';
export default class InviteBannerManager {
    private readonly translator;
    private inviteReference?;
    constructor(translator: Translator);
    /**
     * Trigger an invite banner. The trigger can be canceled during some seconds by the BeforeInstallPrompt event.
     */
    trigger(shortName: string, icon: string, acceptHandler: Function, refuseHandler: Function): void;
    cancel(): void;
    private show;
    private template;
}
