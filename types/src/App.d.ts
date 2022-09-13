import WebManifest from 'web-manifest-reader/dist/src/Model/WebManifest';
import Context from './Context/Context';
import RuleFinder from './Helper/Rule/RuleFinder';
import Translator from './Translation/Translator';
import HelperRenderer from './Helper/Render/HelperRenderer';
import BannerInvite from './Invite/BannerInvite';
import AppInfoCollector from './App/AppInfoCollector';
declare const _default: {
    appInfoCollector: AppInfoCollector;
    manifest: WebManifest;
    ruleFinder: RuleFinder;
    translator: Translator;
    renderer: HelperRenderer;
    bannerInvite: BannerInvite;
    installUserChoice: Promise<{
        outcome: 'accepted' | 'dismissed' | undefined;
        platform: string;
    }>;
    installUserChoiceResult: Function;
    start(): Promise<void>;
    triggerInvite(context: Context, htmlHelperTemplate: string): void;
    dispatchBeforeInstallPromptEvent(userChoicePromise: Promise<BeforeInstallPromptEventUserChoice>, userChoicePromiseResolver: Function): void;
    inviteProcessed(): void;
    isEligibleToInvite(): boolean;
    isAppMode(): boolean;
};
export default _default;
