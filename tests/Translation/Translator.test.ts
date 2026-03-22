import Translator from '../../src/Translation/Translator';

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

let translator: Translator;

beforeEach(() => {
  translator = new Translator();
  translator.setCurrentLanguage('fr');
});

test('isSupportedCurrentLang returns true for a supported language', () => {
  expect(translator.isSupportedCurrentLang()).toBe(true);
});

test('isSupportedCurrentLang returns false for an unsupported language', () => {
  translator.setCurrentLanguage('xx');
  expect(translator.isSupportedCurrentLang()).toBe(false);
});

test('isSupportedCurrentLang throws when no language is set', () => {
  const freshTranslator = new Translator();
  expect(() => freshTranslator.isSupportedCurrentLang()).toThrow('Language has not been set.');
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
  translator.setCurrentLanguage('xx');
  expect(() => translator.translate('simple')).toThrow('Unsupported language');
});
