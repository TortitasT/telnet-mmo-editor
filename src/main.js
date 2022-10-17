import { createApp } from 'vue'
import VueSimpleContextMenu from 'vue-simple-context-menu';
import 'vue-simple-context-menu/dist/vue-simple-context-menu.css';
import App from './App.vue'

const app = createApp(App)

app.mount('#app')

app.component('vue-simple-context-menu', VueSimpleContextMenu);