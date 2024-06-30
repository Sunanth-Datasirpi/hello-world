<template>
<div>
  Event Bus Tutorial
  <event-bus-child-1></event-bus-child-1>
  <event-bus-child-2></event-bus-child-2>

</div>
</template>

<script>
import EventBusChild1 from '../src/components/EventBusChild1.vue';
import EventBusChild2 from '../src/components/EventBusChild2.vue';

export default {
  name: 'App',
  components: {
    EventBusChild1,
    EventBusChild2,

  }
}
</script>
