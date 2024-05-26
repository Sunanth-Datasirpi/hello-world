<template>
    <div>
        <h1>Slot</h1>
        <slot> Default button content</slot>
        <button @click="handleClick">Click me!</button>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick() {
            alert('Button clicked!');
        }
    }
}
</script>
