import InviteEligibilityChecker from '../../src/Invite/InviteEligibilityChecker';
import InviteScheduler from '../../src/Invite/InviteScheduler';
import Translator from '../../src/Translation/Translator';

jest.mock('../../src/Invite/InviteScheduler');
jest.mock('../../src/Translation/Translator');

let mockScheduler: jest.Mocked<InviteScheduler>;
let mockTranslator: jest.Mocked<Translator>;
let checker: InviteEligibilityChecker;

beforeEach(() => {
  jest.clearAllMocks();

  mockScheduler = new InviteScheduler('', 0) as jest.Mocked<InviteScheduler>;
  mockTranslator = new Translator(null as any) as jest.Mocked<Translator>;

  mockScheduler.isTime.mockReturnValue(true);
  mockTranslator.isSupportedCurrentLang.mockReturnValue(true);

  // jsdom does not implement serviceWorker, add it manually
  Object.defineProperty(navigator, 'serviceWorker', { value: {}, configurable: true });

  // jsdom does not implement matchMedia, add it manually
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: jest.fn().mockReturnValue({ matches: false }),
  });

  checker = new InviteEligibilityChecker(mockScheduler, mockTranslator);
});

afterEach(() => {
  delete (navigator as any).serviceWorker;
  delete (window.navigator as any).standalone;
});

test('returns false when service worker is not available', () => {
  delete (navigator as any).serviceWorker;
  expect(checker.isEligibleToInvite()).toBe(false);
});

test('returns false when language is not supported', () => {
  mockTranslator.isSupportedCurrentLang.mockReturnValue(false);
  expect(checker.isEligibleToInvite()).toBe(false);
});

test('returns false when in standalone display mode', () => {
  (window.matchMedia as jest.Mock).mockReturnValue({ matches: true });
  expect(checker.isEligibleToInvite()).toBe(false);
});

test('returns false when in iOS standalone app mode', () => {
  Object.defineProperty(window.navigator, 'standalone', { value: true, configurable: true });
  expect(checker.isEligibleToInvite()).toBe(false);
});

test('returns false when scheduler says it is not time yet', () => {
  mockScheduler.isTime.mockReturnValue(false);
  expect(checker.isEligibleToInvite()).toBe(false);
});

test('returns true when all conditions are met', () => {
  expect(checker.isEligibleToInvite()).toBe(true);
});
