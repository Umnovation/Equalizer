import 'primevue/resources/themes/viva-dark/theme.css'
import 'primeflex/primeflex.scss';
import {createApp} from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Slider from 'primevue/slider'
import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import {clickOutsideDirective} from '/clickOutsideDirective.js';
// Создание экземпляра приложения
const app = createApp(App)

// Регистрация плагина PrimeVue
app.use(PrimeVue)
app.directive('click-outside', clickOutsideDirective);
// Регистрация глобального компонента Slider

app.component('PrimeSlider', Slider)
app.component('PrimeCard', Card)
app.component('PrimeButton', Button)
app.component('InputText', InputText)
app.component('PrimeDialog', Dialog)

// Монтирование приложения в DOM
app.mount('#app')

