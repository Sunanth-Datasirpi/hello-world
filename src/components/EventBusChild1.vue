<template>
    <button @click="sendMessage">Send Message</button>
</template>

<script>
import emitter from '../main';
export default {
  name: "EventBusChild1",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {
    sendMessage() {
      emitter.emit('message', 'Hello from Component A!');
    }
  },
};
</script>

<style lang="scss" scoped></style>