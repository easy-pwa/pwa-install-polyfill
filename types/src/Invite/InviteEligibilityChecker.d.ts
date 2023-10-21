import InviteScheduler from './InviteScheduler';
import Translator from '../Translation/Translator';
export default class InviteEligibilityChecker {
    private readonly inviteScheduler;
    private readonly translator;
    constructor(inviteScheduler: InviteScheduler, translator: Translator);
    isEligibleToInvite(): boolean;
    private isAppMode;
    private hasServiceWorkerService;
}
