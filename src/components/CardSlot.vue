<template>
  <div id="card-header">
    <slot name="header"></slot>
  </div>
  <div id="card-body">
    <slot></slot>
  </div>
  <div id="card-footer">
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "CardSlot",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>