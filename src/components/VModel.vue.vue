<template>
  <div>
    <h2>Custom Components using v-model</h2>
    <input type="text" v-model="firstName" />
    <div>{{firstName}}</div>
    <InputCustom style="margin-top: 1rem " v-model="inputValue" ></InputCustom>
  </div>
</template>

<script>
import InputCustom from "./Input.vue.vue";
export default {
  name: "VModel",
  components: {
    InputCustom,
  },
  created() {},
  data() {
    return {
      firstName: "",
      inputValue: "",
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>