# PWA Install Polyfill

Propose invitation and installation helper for browsers which does not support them (Firefox, iOS...).
Today, only Chrome and Edge browsers support the [BeforeInstallPromptEvent](https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent).
This lightweight library (<30ko) allows to get the same behaviour on some other browsers.

The PWA installation method depends on your browser.
When a user accepts the installation invitation, a helper is showed to help him to install your application.

Currently supported language : en, fr \
The invite banner is not triggered if the brower language is not supported. PR is welcome.

## Demo

You can find a demo on the following url : https://easy-pwa.github.io/pwa-install-polyfill/

## Installation

Due to frequently behaviour changes in browsers, it is recommended to import the script with jsDelivr to always have the latest version.

Copy this instruction at the end of your html header.
``` html
<header>
...
    <script src="https://cdn.jsdelivr.net/npm/@easy-pwa/pwa-install-polyfill" defer="true"></script>
</header>
```
