import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources:{
        en: {
            translation: {
                title: 'Maintenance System',
                label:"Machine/Tool",
                assets:"Assets"
            }
        },
        vi: {
            translation: {
                title: 'Hệ thống bảo trì',
                label:"Công cụ/Máy",
                assets:"Thiết bị"
            }
        },
    }
  });

export default i18n;