

// Register a Service Worker to satisfy the polyfill eligibility check
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

// ── Restore debug form state from URL params ──────────────────────────────────

const params = new URLSearchParams(window.location.search);
const ua = params.get('beforeinstallprompt_polyfill_debug_user_agent');
const lang = params.get('beforeinstallprompt_polyfill_debug_lang');
if (ua) document.getElementById('browser').value = ua;
if (lang) document.getElementById('lang').value = lang;

// ── Native support detection ──────────────────────────────────────────────────

if ('onbeforeinstallprompt' in window) {
  document.getElementById('native-support-notice').removeAttribute('hidden');
}

// ── BeforeInstallPrompt ───────────────────────────────────────────────────────

let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', function(event) {
  deferredPrompt = event;

  const status = document.getElementById('event-status');
  status.removeAttribute('hidden');

  event.userChoice.then((choiceResult) => {
    console.log('userChoice:', choiceResult);
    status.setAttribute('hidden', '');
    deferredPrompt = null;
  });
});

document.getElementById('prompt-link').addEventListener('click', function(e) {
  e.preventDefault();
  if (deferredPrompt) {
    deferredPrompt.prompt();
  }
});
