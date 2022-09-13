import AppInfo from '../App/AppInfo';
export default class {
    readonly app: AppInfo;
    readonly os: string;
    readonly browserName: string;
    readonly browserVersion: number;
    constructor(app: AppInfo, os: string, browserName: string, browserVersion: number);
}
