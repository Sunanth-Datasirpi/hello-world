<template>
  <HelloWorld msg="This value is passed as a prop. Hello World is a new component"/>
  <Computed/>
  <Conditional/>
  <VModel/>
  <VueDirectiveVue/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Computed from './components/Computed.vue';
import Conditional from './components/Conditional.vue';
import VModel from './components/VModel.vue';
import VueDirectiveVue from './components/VueDirective.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Computed,
    Conditional,
    VModel,
    VueDirectiveVue,
  }
}
</script>
