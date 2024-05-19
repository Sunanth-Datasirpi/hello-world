import { createApp } from 'vue';
import App from './App.vue';

// Define the custom directive
const app = createApp(App);

app.directive('red', {
  beforeMount(el) {
    el.style.color = 'red';
  }
});

const vTheme = {
  mounted(el) {
    el.style.backgroundColor = 'red';
  }
};

app.directive('theme', vTheme);


app.mount('#app');
