<template>
  <div v-cloak>
    <!-- v-bind -->
    <h2>v-bind Directive</h2>
    <img :src="imageUrl" alt="Vue Logo">

    <!-- v-model -->
    <h2>v-model Directive</h2>
    <p>Message: <input v-model="message"></p>
    <p>Typed message: {{ message }}</p>

    <!-- v-if, v-else-if, v-else -->
    <h2>v-if, v-else-if, v-else Directives</h2>
    <p v-if="type === 'A'">Type A</p>
    <p v-else-if="type === 'B'">Type B</p>
    <p v-else>Other Type</p>

    <!-- v-for -->
    <h2>v-for Directive</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>

    <!-- v-on -->
    <h2>v-on Directive</h2>
    <button @click="showAlert">Click me</button>

    <!-- v-show -->
    <h2>v-show Directive</h2>
    <p v-show="isVisible">Now you see me</p>

    <!-- v-pre -->
    <h2>v-pre Directive</h2>
    <p v-pre>{{ rawMustache }}</p>

    <!-- v-once -->
    <h2>v-once Directive</h2>
    <p v-once>This will never change: {{ onceMessage }}</p>

    <!-- v-html -->
    <h2>v-html Directive</h2>
    <div v-html="htmlContent"></div>

    <!-- Custom directive: v-focus -->
    <h2>Custom Directive: v-focus</h2>
    <input v-focus>

    <br><br>
    <!-- Toggle Visibility -->
    <button @click="toggleVisibility">Toggle Visibility</button>
  </div>
</template>

<script>
export default {
  name: 'DirectivesExample',
  data() {
    return {
      imageUrl: 'https://vuejs.org/images/logo.png',
      message: '',
      type: 'A',
      items: ['Item 1', 'Item 2', 'Item 3'],
      isVisible: true,
      rawMustache: '{{ This will not be compiled }}',
      onceMessage: 'This is a one-time message.',
      htmlContent: '<strong>This is bold text</strong>'
    };
  },
  methods: {
    showAlert() {
      alert('Button clicked!');
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
