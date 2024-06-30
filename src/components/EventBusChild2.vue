<template>
  <div>{{ message }}</div>
</template>

<script>
import emitter from '../main';

export default {
  name: "EventBusChild2",
  created() {},
  data() {
    return {
      message: ''
    };
  },
  mounted() {
    emitter.on('message', (msg) => {
      this.message = msg;
    });
  },
  beforeUnmount() {
    emitter.off('message');
  },
};
</script>

<style lang="scss" scoped></style>