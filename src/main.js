import './assets/main.css';
import 'primeicons/primeicons.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import router from './router';
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import en from './locales/en.json'
import sw from './locales/sw.json'
import { createApp } from 'vue';


const app = createApp(App);

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en, sw }
  })
  
app.use(router);

app.use(Toast);
app.use(i18n)
app.mount('#app');





