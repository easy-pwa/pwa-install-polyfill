export default class DebugConfig {
  public readonly userAgent?: string;

  public readonly lang?: string;

  constructor(userAgent?: string, lang?: string) {
    this.userAgent = userAgent;
    this.lang = lang;
  }
}
