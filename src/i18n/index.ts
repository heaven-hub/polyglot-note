import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import zhTW from './locals/zh-TW.json'
import zhCN from './locals/zh-CN.json'
import enUS from './locals/en-US.json'
//doc: https://react.i18next.com/
// const langCode = navigator.language || navigator.languages
const resources = {
    'zh-TW':{
        translation:zhTW,
    },
    'zh-CN':{
        translation:zhCN,
    },
    'en-US':{
        translation:enUS,
    },
}
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources:resources,
        // {
        //     en: {
        //         translation: {
        //             "Welcome to React": "Welcome to React and react-i18next"
        //         }
        //     }
        // },
        lng: "zh-TW",
        fallbackLng: "zh-TW",

        interpolation: {
            escapeValue: false
        }
    });
export default i18n;