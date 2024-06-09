<template>
    <div>
        <h2>Vue.js Data Binding Example</h2>

        <!-- One-way Data Binding -->
        <h3>One-way Data Binding</h3>
        <p>{{ message }}</p>

        <!-- Two-way Data Binding -->
        <h3>Two-way Data Binding</h3>
        <input v-model="message">

        <!-- HTML Binding -->
        <h3>HTML Binding</h3>
        <p v-html="htmlContent"></p>

        <!-- Text Binding -->
        <h3>Text Binding</h3>
        <p v-text="textContent"></p>

        <!-- Conditional Rendering -->
        <h3>Conditional Rendering</h3>
        <p v-if="isVisible">You can see me!</p>

        <!-- List Rendering -->
        <h3>List Rendering</h3>
        <ul>
            <li v-for="item in items" :key="item.id">{{ item.name }}</li>
        </ul>

        <!-- Event Handling -->
        <h3>Event Handling</h3>
        <button @click="toggleVisibility">Toggle Visibility</button>

        <!-- Style Binding -->
        <h3>Style Binding</h3>
        <p :class="{ 'highlight': isHighlighted }">This text will be styled conditionally.</p>
        <p :style="styleObject">This text has dynamic styles.</p>

        <!-- Attribute Binding with v-bind -->
        <h3>Attribute Binding with v-bind</h3>
        <a :href="url" target="_blank">Visit Vue.js</a>
        <img :src="imageSrc" :alt="imageAlt">
        <button :disabled="isButtonDisabled">Disabled Button</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello, Vue!',
            isVisible: true,
            isHighlighted: true,
            htmlContent: '<strong>This is bold text from v-html</strong>',
            textContent: 'This is plain text from v-text',
            items: [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' }
            ],
            styleObject: {
                color: 'blue',
                fontSize: '20px'
            },
            url: 'https://vuejs.org',
            imageSrc: 'https://vuejs.org/images/logo.png',
            imageAlt: 'Vue.js Logo',
            isButtonDisabled: true
        };
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    }
};
</script>

<style scoped>
.highlight {
    color: red;
    font-weight: bold;
}
</style>
