import fr from '../../resource/translations/fr.json';
import en from '../../resource/translations/en.json';

export type TranslationDict = { [key: string]: string | TranslationDict };

const lang: { [key: string]: TranslationDict } = {
  fr,
  en
};

export default lang;
