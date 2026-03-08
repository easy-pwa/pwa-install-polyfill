import Translator from '../../src/Translation/Translator';
import LangIdentifier from '../../src/Translation/LangIdentifier';

jest.mock('../../src/Translation/definitions', () => ({
  __esModule: true,
  default: {
    fr: {
      simple: 'valeur simple',
      withVariable: 'bonjour %name%',
      nested: {
        key: 'valeur imbriquée',
      },
    },
  },
}));

const mockGetBrowserLang = jest.fn().mockReturnValue('fr');
const mockLangIdentifier = { getBrowserLang: mockGetBrowserLang } as jest.Mocked<LangIdentifier>;

let translator: Translator;

beforeEach(() => {
  jest.clearAllMocks();
  mockGetBrowserLang.mockReturnValue('fr');
  translator = new Translator(mockLangIdentifier);
});

test('isSupportedCurrentLang returns true for a supported language', () => {
  expect(translator.isSupportedCurrentLang()).toBe(true);
});

test('isSupportedCurrentLang returns false for an unsupported language', () => {
  mockGetBrowserLang.mockReturnValue('xx');
  expect(translator.isSupportedCurrentLang()).toBe(false);
});

test('translate returns a simple key translation', () => {
  expect(translator.translate('simple')).toBe('valeur simple');
});

test('translate returns a nested key translation', () => {
  expect(translator.translate('nested.key')).toBe('valeur imbriquée');
});

test('translate replaces variables in translation', () => {
  expect(translator.translate('withVariable', { '%name%': 'Claude' })).toBe('bonjour Claude');
});

test('translate throws for an unknown key', () => {
  expect(() => translator.translate('unknown.key')).toThrow('Translation unknown.key not found');
});

test('translate throws for an unsupported language', () => {
  mockGetBrowserLang.mockReturnValue('xx');
  expect(() => translator.translate('simple')).toThrow('Unsupported language');
});
