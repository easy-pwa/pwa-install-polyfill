import '../resource/scss/base.scss';
import App from './App';
import DebugConfig from './Debug/DebugConfig';

// Listen for a native beforeinstallprompt event before the app starts.
// If the browser fires it natively (isTrusted: true), we abort the polyfill
// to avoid dispatching a duplicate synthetic event.
let nativeEventFired = false;
window.addEventListener('beforeinstallprompt', event => {
  if (event.isTrusted) {
    nativeEventFired = true;
  }
});

window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const debugUserAgent = urlParams.get('beforeinstallprompt_polyfill_debug_user_agent') ?? undefined;
  const debugLang = urlParams.get('beforeinstallprompt_polyfill_debug_lang') ?? undefined;
  const debugConfig = new DebugConfig(debugUserAgent, debugLang);

  (new App()).start(debugConfig, () => nativeEventFired);
});
