import RuleFinder from './Helper/Rule/RuleFinder';
import Translator from './Translation/Translator';
import HelperRenderer from './Helper/Render/HelperRenderer';
import PromptRenderer from './Prompt/PromptRenderer';
import AppInfoCollector from './App/AppInfoCollector';
import RuleRender from './Helper/Rule/RuleRender';
import BrowserContextDetector from './Browser/BrowserContextDetector';
import BrowserLanguageDetector from './Browser/BrowserLanguageDetector';
import BeforeInstallPromptDispatcher from './BeforeInstallPrompt/BeforeInstallPromptDispatcher';
import BeforeInstallPromptEligibilityChecker from './BeforeInstallPrompt/BeforeInstallPromptEligibilityChecker';
import DebugConfig from './Debug/DebugConfig';

export default class App {
  private readonly appInfoCollector: AppInfoCollector;

  private readonly ruleFinder: RuleFinder;

  private readonly ruleRender: RuleRender;

  private readonly translator: Translator;

  private readonly helperRenderer: HelperRenderer;

  private readonly promptRenderer: PromptRenderer;

  private readonly browserLanguageDetector: BrowserLanguageDetector;

  private readonly browserContextDetector: BrowserContextDetector;

  private readonly beforeInstallPromptDispatcher: BeforeInstallPromptDispatcher;

  private readonly eligibilityChecker: BeforeInstallPromptEligibilityChecker;

  constructor() {
    this.appInfoCollector = new AppInfoCollector();
    this.ruleFinder = new RuleFinder();
    this.ruleRender = new RuleRender();
    this.translator = new Translator();
    this.helperRenderer = new HelperRenderer(this.translator);
    this.promptRenderer = new PromptRenderer(this.translator);
    this.browserLanguageDetector = new BrowserLanguageDetector();
    this.browserContextDetector = new BrowserContextDetector(this.browserLanguageDetector);
    this.beforeInstallPromptDispatcher = new BeforeInstallPromptDispatcher(this.promptRenderer);
    this.eligibilityChecker = new BeforeInstallPromptEligibilityChecker();
  }

  public async start(debug: DebugConfig, isNativeEventFired: () => boolean): Promise<void> {
    if (!this.eligibilityChecker.isEligible()) {
      return;
    }

    const browserContext = this.browserContextDetector.getBrowserContext(debug);
    if (browserContext === undefined) {
      return;
    }

    this.translator.setCurrentLanguage(browserContext.language);
    if (!this.translator.isSupportedCurrentLang()) {
      return;
    }

    await navigator.serviceWorker.ready;

    const appInfo = await this.appInfoCollector.getAppInfo();

    const foundRule = this.ruleFinder.findForContext(browserContext);
    if (foundRule === undefined) {
      return;
    }

    const htmlHelperTemplate = this.ruleRender.getHelperTemplate(foundRule, this.translator);
    const helperCallback = (): void => {
      this.helperRenderer.createHelperPopup(htmlHelperTemplate, appInfo);
    };

    if (!isNativeEventFired()) {
      this.beforeInstallPromptDispatcher.dispatch(appInfo, helperCallback);
    }
  }
}
