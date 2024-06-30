<template>
  <div>
    <div>
      <h2>Counter: {{ count }}</h2>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
      <button @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter-Event",
  created() {},
  data() {
    return {
      count: 0,
    };
  },
  props: {},
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) this.count--;
    },
    reset() {
      this.count = 0;
    },
  },
};
</script>

<style lang="scss" scoped></style>