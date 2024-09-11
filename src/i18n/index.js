import { createI18n } from 'vue-i18n'



const i18n = createI18n({

  // default locale

  locale: 'en',



  // translations

  messages: {

    en: {

      appTitle: 'Mushahed',

    },

    ar: {

      appTitle: 'مشاهد',

    },

  },

})



export default i18n