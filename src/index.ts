import '../resource/scss/base.scss';
import App from './App';
import DebugConfig from './Debug/DebugConfig';

window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const debugUserAgent = urlParams.get('pwa_install_polyfill_debug_user_agent') ?? undefined;
  const debugConfig = new DebugConfig(debugUserAgent);

  (new App()).start(debugConfig);
});
