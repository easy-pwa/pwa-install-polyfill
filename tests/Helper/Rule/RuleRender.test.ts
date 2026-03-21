import RuleRender from '../../../src/Helper/Rule/RuleRender';
import RuleInterface, { Step } from '../../../src/Helper/Rule/RuleInterface';
import Translator from '../../../src/Translation/Translator';
import BrowserContext from '../../../src/Browser/BrowserContext';

jest.mock('../../../src/Translation/Translator');

const mockTranslator = {} as jest.Mocked<Translator>;

function makeRule(steps: Step[]): RuleInterface {
  return {
    support: (_: BrowserContext) => true,
    steps: (_: Translator) => steps,
  };
}

let renderer: RuleRender;

beforeEach(() => {
  renderer = new RuleRender();
});

test('renders an ordered list', () => {
  const rule = makeRule([{ label: 'Step one' }]);

  const html = renderer.getHelperTemplate(rule, mockTranslator);

  expect(html).toContain('<ol class="pwa-helper-steps">');
});

test('renders each step as a list item with label', () => {
  const rule = makeRule([{ label: 'Tap the menu' }, { label: 'Select Install' }]);

  const html = renderer.getHelperTemplate(rule, mockTranslator);

  expect(html).toContain('<li class="pwa-helper-step">');
  expect(html).toContain('<span class="pwa-helper-step-label">Tap the menu</span>');
  expect(html).toContain('<span class="pwa-helper-step-label">Select Install</span>');
});

test('renders icon when step has one', () => {
  const rule = makeRule([{ icon: '<svg>icon</svg>', label: 'Tap the share icon' }]);

  const html = renderer.getHelperTemplate(rule, mockTranslator);

  expect(html).toContain('<span class="pwa-helper-step-icon"><svg>icon</svg></span>');
});

test('omits icon element when step has none', () => {
  const rule = makeRule([{ label: 'Select Add to Home Screen' }]);

  const html = renderer.getHelperTemplate(rule, mockTranslator);

  expect(html).not.toContain('pwa-helper-step-icon');
});

test('passes translator to rule steps', () => {
  const stepsFn = jest.fn().mockReturnValue([{ label: 'Step' }]);
  const rule: RuleInterface = { support: () => true, steps: stepsFn };

  renderer.getHelperTemplate(rule, mockTranslator);

  expect(stepsFn).toHaveBeenCalledWith(mockTranslator);
});
