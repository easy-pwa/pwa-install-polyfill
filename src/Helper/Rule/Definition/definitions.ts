import IOS_Safari_11_3 from './IOS_safari_11_3+';
import Android_firefox_130 from './Android_firefox_130+';
import Android_samsung_24 from './Android_samsung_24+';
import RuleInterface from '../RuleInterface';

const rules: RuleInterface[] = [
  new Android_firefox_130(),
  new Android_samsung_24(),
  new IOS_Safari_11_3(),
];

export default rules;
