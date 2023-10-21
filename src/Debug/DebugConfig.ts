export default class DebugConfig {
  public readonly userAgent?: string;

  constructor(userAgent?: string) {
    this.userAgent = userAgent;
  }
}
