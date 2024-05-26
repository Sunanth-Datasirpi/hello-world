<template>
  <div>
    <h2>{{rank}}.Hi {{name}}</h2>
  </div>
</template>

<script>
export default {
  name: "PropsTutorial",
  created() {},
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      required: true,
      default: "Everyone",
    },
    rank:Number,
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>