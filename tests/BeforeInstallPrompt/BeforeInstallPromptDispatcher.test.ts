import BeforeInstallPromptDispatcher from '../../src/BeforeInstallPrompt/BeforeInstallPromptDispatcher';
import PromptRenderer from '../../src/Prompt/PromptRenderer';
import AppInfo from '../../src/App/AppInfo';

jest.mock('../../src/Prompt/PromptRenderer');

const appInfo = new AppInfo('MyApp', 'My Application', '/icon.png');

let mockShowPrompt: jest.Mock;
let mockPromptRenderer: jest.Mocked<PromptRenderer>;
let helperCallback: jest.Mock;
let dispatcher: BeforeInstallPromptDispatcher;

beforeEach(() => {
  jest.clearAllMocks();
  mockShowPrompt = jest.fn();
  mockPromptRenderer = { showPrompt: mockShowPrompt } as unknown as jest.Mocked<PromptRenderer>;
  helperCallback = jest.fn();
  dispatcher = new BeforeInstallPromptDispatcher(mockPromptRenderer);
});

test('dispatches beforeinstallprompt event on window', () => {
  const listener = jest.fn();
  window.addEventListener('beforeinstallprompt', listener);

  dispatcher.dispatch(appInfo, helperCallback);

  expect(listener).toHaveBeenCalledTimes(1);
  window.removeEventListener('beforeinstallprompt', listener);
});

test('dispatched event has cancelable flag', () => {
  let dispatchedEvent: Event | null = null;
  window.addEventListener('beforeinstallprompt', e => { dispatchedEvent = e; }, { once: true });

  dispatcher.dispatch(appInfo, helperCallback);

  expect((dispatchedEvent as unknown as BeforeInstallPromptEvent)!.cancelable).toBe(true);
});

test('calls showPrompt with appInfo when prompt() is invoked', () => {
  mockShowPrompt.mockReturnValue(new Promise(() => {}));

  const event = dispatcher.dispatch(appInfo, helperCallback);
  event.prompt();

  expect(mockShowPrompt).toHaveBeenCalledWith(appInfo);
});

test('calls helperCallback when user accepts', async () => {
  mockShowPrompt.mockResolvedValue({ outcome: 'accepted', platform: 'web' });

  const event = dispatcher.dispatch(appInfo, helperCallback);
  event.prompt();
  await event.userChoice;

  expect(helperCallback).toHaveBeenCalledTimes(1);
});

test('does not call helperCallback when user dismisses', async () => {
  mockShowPrompt.mockResolvedValue({ outcome: 'dismissed', platform: '' });

  const event = dispatcher.dispatch(appInfo, helperCallback);
  event.prompt();
  await event.userChoice;

  expect(helperCallback).not.toHaveBeenCalled();
});

test('userChoice resolves with accepted outcome', async () => {
  mockShowPrompt.mockResolvedValue({ outcome: 'accepted', platform: 'web' });

  const event = dispatcher.dispatch(appInfo, helperCallback);
  event.prompt();

  await expect(event.userChoice).resolves.toEqual({ outcome: 'accepted', platform: 'web' });
});

test('userChoice resolves with dismissed outcome', async () => {
  mockShowPrompt.mockResolvedValue({ outcome: 'dismissed', platform: '' });

  const event = dispatcher.dispatch(appInfo, helperCallback);
  event.prompt();

  await expect(event.userChoice).resolves.toEqual({ outcome: 'dismissed', platform: '' });
});
