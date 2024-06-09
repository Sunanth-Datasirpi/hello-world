<template>
    <div>
        <h2>Dynamic Component Example</h2>
        <button @click="currentComponent = 'HelloComponent'">Show Hello</button>
        <button @click="currentComponent = 'GoodByeComponent'">Show Goodbye</button>

        <component :is="currentComponent"></component>
    </div>
</template>

<script>
import HelloComponent from './HelloComponent.vue';
import GoodByeComponent from './GoodByeComponent.vue';

export default {
    components: {
        HelloComponent,
        GoodByeComponent,
    },
    data() {
        return {
            currentComponent: 'HelloComponent'
        };
    }
};
</script>
