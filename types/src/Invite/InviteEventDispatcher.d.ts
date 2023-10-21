import AppInfo from '../App/AppInfo';
import InviteBannerManager from './InviteBannerManager';
import HelperRenderer from '../Helper/Render/HelperRenderer';
export default class InviteEventDispatcher {
    private readonly inviteBannerManager;
    private readonly helperRenderer;
    constructor(inviteBannerManager: InviteBannerManager, helperRenderer: HelperRenderer);
    dispatch(appInfo: AppInfo, htmlHelperTemplate: string, answeredCallback: Function): void;
    private dispatchBeforeInstallPromptEvent;
}
