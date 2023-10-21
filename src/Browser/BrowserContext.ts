export default class {
    public readonly os: string;

    public readonly browserName: string;

    public readonly browserVersion: number;

    constructor(os: string, browserName: string, browserVersion: number) {
      this.os = os;
      this.browserName = browserName;
      this.browserVersion = browserVersion;
    }
}
