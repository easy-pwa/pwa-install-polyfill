export default class InviteScheduler {
  public constructor(
        private readonly localStorageKey: string,
        /** Delay between invites in day * */
        private readonly minDelayBetweenInvite: number
  ) {
  }

  public isTime(): boolean {
    const lastInviteAnsweredAt = this.getLastInviteAnsweredAt();
    if (lastInviteAnsweredAt === null) {
      return true;
    }

    const diffDay = (new Date().getTime() - lastInviteAnsweredAt.getTime()) / 1000 / 86400;
    if (diffDay >= this.minDelayBetweenInvite) {
      return true;
    }

    return false;
  }

  public getLastInviteAnsweredAt(): null|Date {
    const lastInviteAnswered = localStorage.getItem(this.localStorageKey);
    if (lastInviteAnswered === null) {
      return null;
    }

    return new Date(lastInviteAnswered);
  }

  public storeLastInviteAnsweredAt(date: Date): void {
    localStorage.setItem(this.localStorageKey, date.toDateString());
  }
}
