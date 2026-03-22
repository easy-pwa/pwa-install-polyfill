import BrowserContextDetector from '../../src/Browser/BrowserContextDetector';
import BrowserLanguageDetector from '../../src/Browser/BrowserLanguageDetector';
import BrowserContext from '../../src/Browser/BrowserContext';
import DebugConfig from '../../src/Debug/DebugConfig';

const mockDetect = jest.fn().mockReturnValue('fr');
const mockLanguageDetector = { detect: mockDetect } as jest.Mocked<BrowserLanguageDetector>;

const detector = new BrowserContextDetector(mockLanguageDetector);

test('returns a BrowserContext for a valid browser user agent', () => {
  const debug = new DebugConfig('Mozilla/5.0 (Android 14; Mobile; rv:130.0) Gecko/130.0 Firefox/130.0');
  const result = detector.getBrowserContext(debug);

  expect(result).toBeInstanceOf(BrowserContext);
  expect(result?.os).toBe('Android OS');
  expect(result?.browserName).toBe('firefox');
  expect(result?.browserVersion).toBe(130);
  expect(result?.language).toBe('fr');
});

test('returns undefined for a bot user agent', () => {
  const debug = new DebugConfig('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');
  const result = detector.getBrowserContext(debug);

  expect(result).toBeUndefined();
});

test('returns undefined for an unrecognized user agent', () => {
  const debug = new DebugConfig('unknown-agent');
  const result = detector.getBrowserContext(debug);

  expect(result).toBeUndefined();
});
