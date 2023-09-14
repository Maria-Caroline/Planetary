import i18n from 'i18next' 
import {initReactI18next} from 'react-i18next'

import enJson from './translations/en.json'
import frJson from './translations/fr.json'
import ptJson from './translations/pt.json'

i18n.use(initReactI18next).init({
    fallbackLng:"en",
    interpolation:{
        escapeValue:false
    }, 
    resources: {
        en: enJson,
        fr: frJson,
        pt: ptJson,
    },
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlTags: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
    transKeyDefaultValues: true,
    transWrapTextNodes: '',
});

export default i18n;