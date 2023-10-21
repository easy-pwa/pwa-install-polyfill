import InviteScheduler from './InviteScheduler';
export default class InviteEligibilityChecker {
    private readonly inviteScheduler;
    constructor(inviteScheduler: InviteScheduler);
    isEligibleToInvite(): boolean;
    private isAppMode;
    private hasServiceWorkerService;
}
