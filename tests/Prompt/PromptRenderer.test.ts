import PromptRenderer from '../../src/Prompt/PromptRenderer';
import AppInfo from '../../src/App/AppInfo';

const appInfo = new AppInfo('MyApp', 'My Application', '/icon.png');

let renderer: PromptRenderer;

beforeEach(() => {
  renderer = new PromptRenderer();
  document.body.innerHTML = '';
  document.body.className = '';
});

test('inserts dialog and mask into the DOM', () => {
  renderer.showPrompt(appInfo);

  expect(document.querySelector('.pwa-install-prompt')).not.toBeNull();
  expect(document.querySelector('.pwa-install-prompt-mask')).not.toBeNull();
});

test('displays app name, icon and domain', () => {
  renderer.showPrompt(appInfo);

  const dialog = document.querySelector('.pwa-install-prompt')!;
  expect(dialog.querySelector('.pwa-install-prompt-app-name')!.textContent).toBe('MyApp');
  expect((dialog.querySelector('.pwa-install-prompt-icon') as HTMLImageElement).src).toContain('/icon.png');
  expect(dialog.querySelector('.pwa-install-prompt-app-domain')!.textContent).toBe(window.location.hostname);
});

test('adds active class to body', () => {
  renderer.showPrompt(appInfo);

  expect(document.body.classList.contains('pwa-install-prompt-active')).toBe(true);
});

test('resolves with dismissed when cancel is clicked', async () => {
  const promise = renderer.showPrompt(appInfo);

  (document.querySelector('.pwa-install-prompt-cancel') as HTMLElement).click();

  await expect(promise).resolves.toEqual({ outcome: 'dismissed', platform: '' });
});

test('resolves with accepted when install is clicked', async () => {
  const promise = renderer.showPrompt(appInfo);

  (document.querySelector('.pwa-install-prompt-install') as HTMLElement).click();

  await expect(promise).resolves.toEqual({ outcome: 'accepted', platform: 'web' });
});

test('removes dialog and mask from DOM after cancel', async () => {
  const promise = renderer.showPrompt(appInfo);

  (document.querySelector('.pwa-install-prompt-cancel') as HTMLElement).click();
  await promise;

  expect(document.querySelector('.pwa-install-prompt')).toBeNull();
  expect(document.querySelector('.pwa-install-prompt-mask')).toBeNull();
});

test('removes dialog and mask from DOM after install', async () => {
  const promise = renderer.showPrompt(appInfo);

  (document.querySelector('.pwa-install-prompt-install') as HTMLElement).click();
  await promise;

  expect(document.querySelector('.pwa-install-prompt')).toBeNull();
  expect(document.querySelector('.pwa-install-prompt-mask')).toBeNull();
});

test('removes active class from body after choice', async () => {
  const promise = renderer.showPrompt(appInfo);

  (document.querySelector('.pwa-install-prompt-cancel') as HTMLElement).click();
  await promise;

  expect(document.body.classList.contains('pwa-install-prompt-active')).toBe(false);
});
