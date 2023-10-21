export default class InviteScheduler {
    private readonly localStorageKey;
    /** Delay between invites in day * */
    private readonly minDelayBetweenInvite;
    constructor(localStorageKey: string, 
    /** Delay between invites in day * */
    minDelayBetweenInvite: number);
    isTime(): boolean;
    getLastInviteAnsweredAt(): null | Date;
    storeLastInviteAnsweredAt(date: Date): void;
}
