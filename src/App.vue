<template>
  <HelloWorld msg="This value is passed as a prop. Hello World is a new component"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
