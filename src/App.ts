import RuleFinder from './Helper/Rule/RuleFinder';
import Translator from './Translation/Translator';
import HelperRenderer from './Helper/Render/HelperRenderer';
import InviteBannerManager from './Invite/InviteBannerManager';
import AppInfoCollector from './App/AppInfoCollector';
import RuleRender from './Helper/Rule/RuleRender';
import BrowserContextFactory from './Browser/BrowserContextFactory';
import InviteScheduler from './Invite/InviteScheduler';
import InviteEventDispatcher from './Invite/InviteEventDispatcher';
import InviteEligibilityChecker from './Invite/InviteEligibilityChecker';
import DebugConfig from './Debug/DebugConfig';
import LangIdentifier from './Translation/LangIdentifier';

export default class App {
  private readonly appInfoCollector: AppInfoCollector;

  private readonly ruleFinder: RuleFinder;

  private readonly ruleRender: RuleRender;

  private readonly langIdentifier: LangIdentifier;

  private readonly translator: Translator;

  private readonly helperRenderer: HelperRenderer;

  private readonly inviteBannerManager: InviteBannerManager;

  private readonly browserContextFactory: BrowserContextFactory;

  private readonly inviteScheduler: InviteScheduler;

  private readonly inviteEventDispatcher: InviteEventDispatcher;

  private readonly inviteEligibilityChecker: InviteEligibilityChecker;

  constructor() {
    this.appInfoCollector = new AppInfoCollector();
    this.ruleFinder = new RuleFinder();
    this.ruleRender = new RuleRender();
    this.langIdentifier = new LangIdentifier();
    this.translator = new Translator(this.langIdentifier);
    this.helperRenderer = new HelperRenderer();
    this.inviteBannerManager = new InviteBannerManager(this.translator);
    this.browserContextFactory = new BrowserContextFactory();
    this.inviteScheduler = new InviteScheduler('pwa-invitation-polyfill', 15);
    this.inviteEventDispatcher = new InviteEventDispatcher(this.inviteBannerManager, this.helperRenderer);
    this.inviteEligibilityChecker = new InviteEligibilityChecker(this.inviteScheduler, this.translator);
  }

  public async start(debug: DebugConfig): Promise<void> {
    if (!this.inviteEligibilityChecker.isEligibleToInvite()) {
      return;
    }

    await navigator.serviceWorker.ready;

    const browserContext = this.browserContextFactory.getBrowserContext(debug);
    if (browserContext === null) {
      return;
    }

    const appInfo = await this.appInfoCollector.getAppInfo();

    const foundRule = this.ruleFinder.findForContext(browserContext);
    if (foundRule !== null) {
      const htmlHelperTemplate = this.ruleRender.getHelperTemplate(foundRule, this.translator);
      this.inviteEventDispatcher.dispatch(
        appInfo,
        htmlHelperTemplate,
        () => { this.inviteScheduler.storeLastInviteAnsweredAt(new Date()); }
      );
    }
  }
}
