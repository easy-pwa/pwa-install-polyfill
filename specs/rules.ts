import Android_firefox_100 from "../src/Helper/Rule/Definition/Android_firefox_100-";
import IOS_safari_11_3 from "../src/Helper/Rule/Definition/IOS_safari_11_3-";
import Android_samsung_17_0 from "../src/Helper/Rule/Definition/Android_samsung_17_0-";

export default [
  {useragent: 'Mozilla/5.0 (iPod; CPU iPhone OS 12_0 like macOS) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/12.0 Mobile/14A5335d Safari/602.1.50', expectedRule: IOS_safari_11_3},
  {useragent: 'Mozilla/5.0 (Android 11; Mobile; rv:100.0) Gecko/100.0 Firefox/100.0', expectedRule: Android_firefox_100},
  {useragent: 'Mozilla/5.0 (Linux; Android 11; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/17.0 Chrome/91.0.4472.120 Mobile Safari/537.36', expectedRule: Android_samsung_17_0},
  {useragent: 'Mozilla/5.0 (Linux; Android 11; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/91.0.4472.120 Mobile Safari/537.36', expectedRule: null},
];
