import InviteScheduler from "../../src/Invite/InviteScheduler";

const minDelayBetweenInvite = 10;
let inviteScheduler = new InviteScheduler('test-storage-key', minDelayBetweenInvite);

beforeEach(() => {
    localStorage.clear();
});

test('No invite answered yet', () => {
    const isTime = inviteScheduler.isTime();
    expect(isTime).toBeTruthy();
});


const suite0ToN = Array.from(Array(minDelayBetweenInvite+1).keys());
test.each(suite0ToN)('Check if it\'s time for a last answer there are %i days ago and a minimal delay of '+minDelayBetweenInvite+' days', (day) => {
    const today = new Date();
    const pastDayDate = new Date();
    pastDayDate.setDate(today.getDate() - day);

    inviteScheduler.storeLastInviteAnsweredAt(pastDayDate);
    const isTime = inviteScheduler.isTime();
    expect(isTime).toBe(day >= minDelayBetweenInvite);
});
