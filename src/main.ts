import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '~/routes'
import App from '~/App.vue';
import './style.css';

const app = createApp(App)

app.use(createPinia())
  .use(router)
  .mount('#app')