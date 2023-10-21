import Manifest, { WebManifestIcon } from 'web-manifest-reader';
import AppInfo from './AppInfo';

export default class {
  public async getAppInfo(): Promise<AppInfo> {
    const manifest = await Manifest.read();
    if (manifest === null || !manifest.short_name || !manifest.name || !manifest.icons) {
      throw new Error('Missing property declarations in manifest.');
    }

    return new AppInfo(manifest.short_name, manifest.name, this.getIconPath(manifest.icons));
  }

  private getIconPath(icons: WebManifestIcon[]): string {
    const icon = icons[0];
    if (!icon.src) {
      throw new Error('Impossible to get the icon path.');
    }
    return icon.src;
  }
}
