// Manually remove item for proposing invitation all the times
localStorage.removeItem('pwa-invitation-polyfill');

// Registering a Service Worker (which cache a fake page) to enable the invitation system
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}


window.addEventListener("beforeinstallprompt", function(beforeInstallPromptEvent) {
  //beforeInstallPromptEvent.preventDefault();
  beforeInstallPromptEvent.userChoice.then((choiceResult) => {
    console.log(choiceResult);
  });
  //beforeInstallPromptEvent.prompt();
});
