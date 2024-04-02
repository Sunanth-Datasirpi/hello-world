<template>
  <HelloWorld msg="This value is passed as a prop. Hello World is a new component"/>
  <Computed/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Computed from './components/Computed.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Computed
  }
}
</script>
