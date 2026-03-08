import BeforeInstallPromptEligibilityChecker from '../../src/BeforeInstallPrompt/BeforeInstallPromptEligibilityChecker';
import Translator from '../../src/Translation/Translator';

jest.mock('../../src/Translation/Translator');

const mockIsSupportedCurrentLang = jest.fn().mockReturnValue(true);
const mockTranslator = { isSupportedCurrentLang: mockIsSupportedCurrentLang } as unknown as jest.Mocked<Translator>;

let checker: BeforeInstallPromptEligibilityChecker;

beforeEach(() => {
  jest.clearAllMocks();
  mockIsSupportedCurrentLang.mockReturnValue(true);

  // jsdom does not implement serviceWorker, add it manually
  Object.defineProperty(navigator, 'serviceWorker', { value: {}, configurable: true });

  // jsdom does not implement matchMedia, add it manually
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: jest.fn().mockReturnValue({ matches: false }),
  });

  checker = new BeforeInstallPromptEligibilityChecker(mockTranslator);
});

afterEach(() => {
  delete (navigator as any).serviceWorker;
  delete (window.navigator as any).standalone;
});

test('returns false when service worker is not available', () => {
  delete (navigator as any).serviceWorker;
  expect(checker.isEligible()).toBe(false);
});

test('returns false when language is not supported', () => {
  mockIsSupportedCurrentLang.mockReturnValue(false);
  expect(checker.isEligible()).toBe(false);
});

test('returns false when in standalone display mode', () => {
  (window.matchMedia as jest.Mock).mockReturnValue({ matches: true });
  expect(checker.isEligible()).toBe(false);
});

test('returns false when in iOS standalone app mode', () => {
  Object.defineProperty(window.navigator, 'standalone', { value: true, configurable: true });
  expect(checker.isEligible()).toBe(false);
});

test('returns true when all conditions are met', () => {
  expect(checker.isEligible()).toBe(true);
});
