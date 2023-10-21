export default class HelperRenderer {
  public createHelperPopup(htmlTemplate: string): void {
    const popupContent = document.createElement('div');
    popupContent.classList.add('pwa-homescreen-helper');
    popupContent.innerHTML = `
            <h1>Installer l\'application</h1>
            <div class="message">${htmlTemplate}</div>
            <div class="button">C'est fait !</div>
        `;

    const mask = document.createElement('div');
    mask.classList.add('pwa-homescreen-helper-mask');

    const closeHelper = (): void => {
      document.body.classList.remove('pwa-helper-active');
      const $helper = document.getElementsByClassName('pwa-homescreen-helper').item(0);
      if ($helper !== null) {
        $helper.remove();
      }

      const $helperMask = document.getElementsByClassName('pwa-homescreen-helper-mask').item(0);
      if ($helperMask !== null) {
        $helperMask.remove();
      }
    };

    popupContent.addEventListener('click', closeHelper);
    window.setTimeout(closeHelper, 30000);

    document.body.appendChild(popupContent);
    document.body.appendChild(mask);

    document.body.classList.add('pwa-helper-active');
  }
}
