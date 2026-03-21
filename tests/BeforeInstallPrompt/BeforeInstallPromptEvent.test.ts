import BeforeInstallPromptEvent from '../../src/BeforeInstallPrompt/BeforeInstallPromptEvent';

let resolveUserChoice: (value: BeforeInstallPromptEventUserChoice) => void;
let userChoicePromise: Promise<BeforeInstallPromptEventUserChoice>;
let promptHandler: jest.Mock;
let event: BeforeInstallPromptEvent;

beforeEach(() => {
  userChoicePromise = new Promise(resolve => {
    resolveUserChoice = resolve;
  });
  promptHandler = jest.fn();
  event = new BeforeInstallPromptEvent(userChoicePromise, promptHandler);
});

test('exposes platforms', () => {
  expect(event.platforms).toEqual(['web']);
});

test('exposes userChoice promise', () => {
  expect(event.userChoice).toBe(userChoicePromise);
});

test('prompt() calls the handler on first call', () => {
  event.prompt();

  expect(promptHandler).toHaveBeenCalledTimes(1);
});

test('prompt() does not call the handler on subsequent calls', () => {
  event.prompt();
  event.prompt();
  event.prompt();

  expect(promptHandler).toHaveBeenCalledTimes(1);
});

test('prompt() returns userChoice promise', () => {
  expect(event.prompt()).toBe(userChoicePromise);
});

test('prompt() returns the same promise on subsequent calls', () => {
  const first = event.prompt();
  const second = event.prompt();

  expect(first).toBe(second);
});

test('prompt() resolves with the userChoice value', async () => {
  const promptPromise = event.prompt();
  resolveUserChoice({ outcome: 'accepted', platform: 'web' });

  await expect(promptPromise).resolves.toEqual({ outcome: 'accepted', platform: 'web' });
});
