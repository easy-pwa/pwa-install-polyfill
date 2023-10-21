import RuleFinder from "../../../src/Helper/Rule/RuleFinder";
import AppInfo from "../../../src/App/AppInfo";
import IOS_safari_11_3 from "../../../src/Helper/Rule/Definition/IOS_safari_11_3-";
import Android_firefox_100 from "../../../src/Helper/Rule/Definition/Android_firefox_100-";
import rulesCases from '../../../specs/rules'
import BrowserContext from "../../../src/Browser/BrowserContext";
import {BrowserInfo, detect as BrowserDetect} from "detect-browser";

test.each(rulesCases)('$useragent $expectedRule', async ({useragent, expectedRule}) => {
    const browserInfo = BrowserDetect(useragent);
    if (null === browserInfo) {
        return;
    }

    const browserContext = new BrowserContext(browserInfo.os!, browserInfo.name, parseFloat(browserInfo.version!));
    const ruleFinder = new RuleFinder();
    const rule = ruleFinder.findForContext(browserContext);
    if (expectedRule === null) {
        expect(rule).toBeNull();
    } else {
        expect(rule).toBeInstanceOf(expectedRule);
    }
});
