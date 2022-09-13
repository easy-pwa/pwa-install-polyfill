import Translator from '../Translation/Translator';
export default class {
    private translator;
    private inviteReference?;
    constructor(translator: Translator);
    trigger(shortName: string, icon: string, acceptHandler: Function, refuseHandler: Function): void;
    cancel(): void;
    show(htmlTemplate: string, acceptHandler: Function, refuseHandler: Function): void;
    private template;
}
