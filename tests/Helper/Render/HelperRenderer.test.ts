import HelperRenderer from '../../../src/Helper/Render/HelperRenderer';
import AppInfo from '../../../src/App/AppInfo';
import Translator from '../../../src/Translation/Translator';

jest.mock('../../../src/Translation/Translator');

const appInfo = new AppInfo('MyApp', 'My Application', '/icon.png');
const htmlTemplate = '<div>Step 1: tap the menu</div>';

const mockTranslate = jest.fn();
const mockTranslator = { translate: mockTranslate } as unknown as jest.Mocked<Translator>;

let renderer: HelperRenderer;

beforeEach(() => {
  jest.clearAllMocks();
  mockTranslate.mockImplementation((key: string) => {
    if (key === 'helper.title') return 'Install MyApp';
    if (key === 'helper.done') return 'Done!';
    return key;
  });

  document.body.innerHTML = '';
  document.body.className = '';
  renderer = new HelperRenderer(mockTranslator);
});


test('inserts popup and mask into the DOM', () => {
  renderer.createHelperPopup(htmlTemplate, appInfo);

  expect(document.querySelector('.pwa-homescreen-helper')).not.toBeNull();
  expect(document.querySelector('.pwa-homescreen-helper-mask')).not.toBeNull();
});

test('displays translated title with app name', () => {
  renderer.createHelperPopup(htmlTemplate, appInfo);

  expect(mockTranslate).toHaveBeenCalledWith('helper.title', { '%app_name%': 'MyApp' });
  expect(document.querySelector('.pwa-homescreen-helper h1')!.textContent).toBe('Install MyApp');
});

test('displays translated done button', () => {
  renderer.createHelperPopup(htmlTemplate, appInfo);

  expect(mockTranslate).toHaveBeenCalledWith('helper.done');
  expect(document.querySelector('.button-done')!.textContent).toBe('Done!');
});

test('injects html template into message area', () => {
  renderer.createHelperPopup(htmlTemplate, appInfo);

  expect(document.querySelector('.pwa-homescreen-helper .message')!.innerHTML).toContain('Step 1: tap the menu');
});

test('adds active class to body', () => {
  renderer.createHelperPopup(htmlTemplate, appInfo);

  expect(document.body.classList.contains('pwa-helper-active')).toBe(true);
});

test('closes popup when done button is clicked', () => {
  renderer.createHelperPopup(htmlTemplate, appInfo);

  (document.querySelector('.button-done') as HTMLElement).click();

  expect(document.querySelector('.pwa-homescreen-helper')).toBeNull();
  expect(document.querySelector('.pwa-homescreen-helper-mask')).toBeNull();
  expect(document.body.classList.contains('pwa-helper-active')).toBe(false);
});

