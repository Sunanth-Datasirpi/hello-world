<template>
  <div v-for="name in names" :key="name.firstName">
    <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
  </div>
</template>

<script>
export default {
  name: "NameList",
  created() {},
  data() {
    return {
      names: [
        {
          firstName:"Lionel",
          lastName: "Messi"
        },
        {
          firstName: "Virat",
          lastName: "Kholi"
        },
        {
          firstName: "MS",
          lastName: "Dhoni"
        },
      ],
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>