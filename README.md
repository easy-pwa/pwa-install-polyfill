# PWA Install Polyfill

[![npm version](https://img.shields.io/npm/v/@easy-pwa/beforeinstallprompt-polyfill)](https://www.npmjs.com/package/@easy-pwa/beforeinstallprompt-polyfill)
[![license](https://img.shields.io/npm/l/@easy-pwa/beforeinstallprompt-polyfill)](https://github.com/easy-pwa/beforeinstallprompt-polyfill/blob/main/LICENSE)

Bring the [BeforeInstallPromptEvent](https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent) to browsers that don't support it natively.

Chrome and Edge fire this event automatically, allowing you to invite users to install your PWA.
This polyfill does the same for other browsers, so you can offer a consistent install experience across all devices,
using the exact same API.

## How it works

1. The polyfill detects the user's browser and dispatches a synthetic `BeforeInstallPromptEvent` on `window`
2. Your code listens for the event and calls `event.prompt()` when appropriate
3. A Chrome-like install dialog appears, followed by step-by-step install instructions tailored to the user's browser

## Installation

Using jsDelivr is recommended so your users always get install instructions up to date with the latest browser changes. Lock to a major version to avoid breaking changes.

```html
<head>
    ...
    <script type="module" src="https://cdn.jsdelivr.net/npm/@easy-pwa/pwa-install-polyfill@1"></script>
</head>
```

## Usage

Store the event when it fires, then call `event.prompt()` on your own trigger — a button, a banner, a custom UI element.

```js
let installPrompt = null;

window.addEventListener('beforeinstallprompt', (event) => {
    installPrompt = event;
    document.getElementById('install-button').hidden = false;
});

document.getElementById('install-button').addEventListener('click', async () => {
    if (!installPrompt) return;

    const result = await installPrompt.prompt();

    if (result.outcome === 'accepted') {
        console.log('User accepted the install prompt');
    }

    installPrompt = null;
    document.getElementById('install-button').hidden = true;
});
```

## Demo

https://easy-pwa.github.io/pwa-install-polyfill/

## Languages

The install instructions are currently available in **English** and **French**. The polyfill will not trigger if the user's browser language is not supported.

Contributions for additional languages are welcome — open a PR adding a translation file in `resource/translations/`.
