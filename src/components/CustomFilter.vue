<template>
  <div>
    <h2>Custom Filter</h2>
    <p>{{ $filters.toUpperCase('Change the content to uppercase using filter') }}</p>
  </div>
</template>

<script>
export default {
  name: "CustomFilter",
  created() {},
  data() {
    return {
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>