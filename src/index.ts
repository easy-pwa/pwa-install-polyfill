import '../resource/scss/base.scss';
import App from './App';
import DebugConfig from './Debug/DebugConfig';

window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const debugUserAgent = urlParams.get('beforeinstallprompt_polyfill_debug_user_agent') ?? undefined;
  const debugLang = urlParams.get('beforeinstallprompt_polyfill_debug_lang') ?? undefined;
  const debugConfig = new DebugConfig(debugUserAgent, debugLang);

  (new App()).start(debugConfig);
});
