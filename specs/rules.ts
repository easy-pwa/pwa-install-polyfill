import Android_firefox_130 from "../src/Helper/Rule/Definition/Android_firefox_130+";
import IOS_safari_11_3 from "../src/Helper/Rule/Definition/IOS_safari_11_3+";
import Android_samsung_24 from "../src/Helper/Rule/Definition/Android_samsung_24+";

export default [
  // Supported browsers
  {useragent: 'Mozilla/5.0 (iPod; CPU iPhone OS 12_0 like macOS) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/12.0 Mobile/14A5335d Safari/602.1.50', expectedRule: IOS_safari_11_3},
  {useragent: 'Mozilla/5.0 (Android 14; Mobile; rv:130.0) Gecko/130.0 Firefox/130.0', expectedRule: Android_firefox_130},
  {useragent: 'Mozilla/5.0 (Linux; Android 14; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/24.0 Chrome/117.0.0.0 Mobile Safari/537.36', expectedRule: Android_samsung_24},
  // Unsupported: version below minimum
  {useragent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1', expectedRule: undefined},
  {useragent: 'Mozilla/5.0 (Android 14; Mobile; rv:129.0) Gecko/129.0 Firefox/129.0', expectedRule: undefined},
  {useragent: 'Mozilla/5.0 (Linux; Android 14; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/115.0.0.0 Mobile Safari/537.36', expectedRule: undefined},
  // Unsupported: desktop browser
  {useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', expectedRule: undefined},
];
