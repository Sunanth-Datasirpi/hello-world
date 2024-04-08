<template>
  <HelloWorld msg="This value is passed as a prop. Hello World is a new component"/>
  <Computed/>
  <Conditional/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Computed from './components/Computed.vue';
import Conditional from './components/Conditional.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Computed,
    Conditional,
  }
}
</script>
