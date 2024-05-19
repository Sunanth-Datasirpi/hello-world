<template>
  <div>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    <div>{{ modelValue }}</div>
  </div>
</template>

<script>
export default {
  name: "InputCustom",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
