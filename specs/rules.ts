import Android_firefox_100 from "../src/Helper/Rule/Definition/Android_firefox_100-";
import IOS_safari_11_3 from "../src/Helper/Rule/Definition/IOS_safari_11_3-";
import Android_samsung_17_0 from "../src/Helper/Rule/Definition/Android_samsung_17_0-";

export default [
  // Supported browsers
  {useragent: 'Mozilla/5.0 (iPod; CPU iPhone OS 12_0 like macOS) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/12.0 Mobile/14A5335d Safari/602.1.50', expectedRule: IOS_safari_11_3},
  {useragent: 'Mozilla/5.0 (Android 11; Mobile; rv:100.0) Gecko/100.0 Firefox/100.0', expectedRule: Android_firefox_100},
  {useragent: 'Mozilla/5.0 (Linux; Android 11; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/17.0 Chrome/91.0.4472.120 Mobile Safari/537.36', expectedRule: Android_samsung_17_0},
  // Unsupported: version below minimum
  {useragent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1', expectedRule: null},
  {useragent: 'Mozilla/5.0 (Android 11; Mobile; rv:99.0) Gecko/99.0 Firefox/99.0', expectedRule: null},
  {useragent: 'Mozilla/5.0 (Linux; Android 11; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/91.0.4472.120 Mobile Safari/537.36', expectedRule: null},
  // Unsupported: desktop browser
  {useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', expectedRule: null},
];
