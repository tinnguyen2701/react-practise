import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translate_en from "./translations/en/translate.json"
import translate_vn from "./translations/vn/translate.json"
export const resources = {
    en: {
        translation: translate_en
    },
    vn: {
        translation: translate_vn
    }
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});