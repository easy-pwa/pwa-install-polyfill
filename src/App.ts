import RuleFinder from './Helper/Rule/RuleFinder';
import Translator from './Translation/Translator';
import HelperRenderer from './Helper/Render/HelperRenderer';
import AppInfoCollector from './App/AppInfoCollector';
import RuleRender from './Helper/Rule/RuleRender';
import BrowserContextDetector from './Browser/BrowserContextDetector';
import BeforeInstallPromptDispatcher from './BeforeInstallPrompt/BeforeInstallPromptDispatcher';
import BeforeInstallPromptEligibilityChecker from './BeforeInstallPrompt/BeforeInstallPromptEligibilityChecker';
import DebugConfig from './Debug/DebugConfig';
import LangIdentifier from './Translation/LangIdentifier';

export default class App {
  private readonly appInfoCollector: AppInfoCollector;

  private readonly ruleFinder: RuleFinder;

  private readonly ruleRender: RuleRender;

  private readonly langIdentifier: LangIdentifier;

  private readonly translator: Translator;

  private readonly helperRenderer: HelperRenderer;

  private readonly browserContextDetector: BrowserContextDetector;

  private readonly beforeInstallPromptDispatcher: BeforeInstallPromptDispatcher;

  private readonly eligibilityChecker: BeforeInstallPromptEligibilityChecker;

  constructor() {
    this.appInfoCollector = new AppInfoCollector();
    this.ruleFinder = new RuleFinder();
    this.ruleRender = new RuleRender();
    this.langIdentifier = new LangIdentifier();
    this.translator = new Translator(this.langIdentifier);
    this.helperRenderer = new HelperRenderer();
    this.browserContextDetector = new BrowserContextDetector();
    this.beforeInstallPromptDispatcher = new BeforeInstallPromptDispatcher();
    this.eligibilityChecker = new BeforeInstallPromptEligibilityChecker(this.translator);
  }

  public async start(debug: DebugConfig): Promise<void> {
    if (!this.eligibilityChecker.isEligible()) {
      return;
    }

    await navigator.serviceWorker.ready;

    const browserContext = this.browserContextDetector.getBrowserContext(debug);
    if (browserContext === null) {
      return;
    }

    const appInfo = await this.appInfoCollector.getAppInfo();

    const foundRule = this.ruleFinder.findForContext(browserContext);
    if (foundRule === null) {
      return;
    }

    const htmlHelperTemplate = this.ruleRender.getHelperTemplate(foundRule, this.translator);
    const promptCallback = (): void => {
      this.helperRenderer.createHelperPopup(htmlHelperTemplate);
    };

    this.beforeInstallPromptDispatcher.dispatch(promptCallback);
  }
}
