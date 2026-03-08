import BrowserContextDetector from '../../src/Browser/BrowserContextDetector';
import BrowserContext from '../../src/Browser/BrowserContext';
import DebugConfig from '../../src/Debug/DebugConfig';

const detector = new BrowserContextDetector();

test('returns a BrowserContext for a valid browser user agent', () => {
  const debug = new DebugConfig('Mozilla/5.0 (Android 11; Mobile; rv:100.0) Gecko/100.0 Firefox/100.0');
  const result = detector.getBrowserContext(debug);

  expect(result).toBeInstanceOf(BrowserContext);
  expect(result?.os).toBe('Android OS');
  expect(result?.browserName).toBe('firefox');
  expect(result?.browserVersion).toBe(100);
});

test('returns null for a bot user agent', () => {
  const debug = new DebugConfig('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');
  const result = detector.getBrowserContext(debug);

  expect(result).toBeNull();
});

test('returns null for an unrecognized user agent', () => {
  const debug = new DebugConfig('unknown-agent');
  const result = detector.getBrowserContext(debug);

  expect(result).toBeNull();
});
