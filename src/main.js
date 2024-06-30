import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt';

// Define the custom directive
const app = createApp(App);

const emitter = mitt();
export default emitter;

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

//filter
app.config.globalProperties.$filters = {
      toUpperCase(value) {
        return value.toUpperCase();
      }
    };

app.directive('theme', vTheme);


app.mount('#app');
