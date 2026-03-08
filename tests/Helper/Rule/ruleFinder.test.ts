import RuleFinder from '../../../src/Helper/Rule/RuleFinder';
import rulesCases from '../../../specs/rules';
import BrowserContext from '../../../src/Browser/BrowserContext';
import { detect as BrowserDetect } from 'detect-browser';

test.each(rulesCases)('$useragent $expectedRule', ({ useragent, expectedRule }) => {
  const browserInfo = BrowserDetect(useragent);
  expect(browserInfo).not.toBeNull();
  if (!browserInfo) return;

  const browserContext = new BrowserContext(browserInfo.os!, browserInfo.name, parseFloat(browserInfo.version!));
  const ruleFinder = new RuleFinder();
  const rule = ruleFinder.findForContext(browserContext);
  if (expectedRule === null) {
    expect(rule).toBeNull();
  } else {
    expect(rule).toBeInstanceOf(expectedRule);
  }
});
