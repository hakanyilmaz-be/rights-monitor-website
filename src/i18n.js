import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationTR from './locales/tr/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  tr: {
    translation: translationTR
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr', // Varsayılan dil Türkçe
    fallbackLng: 'tr', // Dil bulunamazsa Türkçe kullanılır
    interpolation: {
      escapeValue: false // React için özel olarak escape işlemi yapılmaz
    }
  });

export default i18n;
