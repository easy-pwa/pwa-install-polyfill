import DebugConfig from './Debug/DebugConfig';
export default class App {
    private readonly appInfoCollector;
    private readonly ruleFinder;
    private readonly ruleRender;
    private readonly translator;
    private readonly helperRenderer;
    private readonly inviteBannerManager;
    private readonly browserContextFactory;
    private readonly inviteScheduler;
    private readonly inviteEventDispatcher;
    private readonly inviteEligibilityChecker;
    constructor();
    start(debug: DebugConfig): Promise<void>;
}
