<template>
    <div>
      <h2>Conditional Rendering</h2>
  
      <h3>v-if and v-else</h3>
      <p v-if="ifElseCondition">Rendered when condition is true</p>
      <p v-else>Rendered when condition is false</p>
      <button @click="toggleIfElseCondition">Toggle Condition</button>
  
      <h3>v-show</h3>
      <p v-show="showCondition">This content is shown when condition is true</p>
      <p v-show="!showCondition">This content is shown when condition is false</p>
      <button @click="toggleShowCondition">Toggle Condition</button>
  
      <h3>Computed Property</h3>
      <p v-if="isTrue">Rendered when condition is true</p>
      <p v-else>Rendered when condition is false</p>
  
      <h3>v-for</h3>
      <ul v-if="items.length > 0">
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
      <p v-else>No items to display</p>
    </div>
  </template>
  
  <script>
  export default {
    name:"Conditional-render",
    data() {
      return {
        ifElseCondition: true,
        showCondition: true,
        items: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
        ],
      };
    },
    computed: {
      isTrue() {
        return this.ifElseCondition;
      },
    },
    methods: {
      toggleIfElseCondition() {
        this.ifElseCondition = !this.ifElseCondition;
      },
      toggleShowCondition() {
        this.showCondition = !this.showCondition;
      },
    },
  };
  </script>
  