import 'udany-toolbox/extend';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './css/main.scss';
import plugins from './plugins'


const app = createApp(App);
app.use(router);
app.mount('#app');


app.use(plugins);
