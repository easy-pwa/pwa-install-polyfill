export default class {
  public readonly os: string;

  public readonly browserName: string;

  public readonly browserVersion: number;

  public readonly language: string;

  constructor(os: string, browserName: string, browserVersion: number, language: string) {
    this.os = os;
    this.browserName = browserName;
    this.browserVersion = browserVersion;
    this.language = language;
  }
}
