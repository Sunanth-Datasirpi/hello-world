<template>
  <HelloWorld msg="This value is passed as a prop. Hello World is a new component" />
  <Computed />
  <Conditional />
  <VModel />
  <VueDirectiveVue />
  <CustomButton>
    <span>Custom Button Content</span>
  </CustomButton>
  <CustomButton>
  </CustomButton>
  <CustomButton>
    <h1>Danger Button</h1>
    <h2>Sunanth</h2>
  </CustomButton>
  <CardSlot>
    <template v-slot:header>Named slot</template>
    <template v-slot:default>Slots in Vue.js enhance component reusability, flexibility, and maintainability by:
      Allowing dynamic content injection.
      Providing scoped slots for better data handling.
      Encouraging separation of structure and content.
      Offering default content for robustness.</template>
    <template v-slot:footer>Thank you</template>
  </CardSlot>
  <h1>Slot Props</h1>
  <NameList v-slot:default="slotProps">{{slotProps.firstName}} {{ slotProps.lastName }}</NameList>
  <NameList v-slot:default="slotProps">{{ slotProps.lastName }} {{ slotProps.firstName }}</NameList>
  <NameList v-slot:default="slotProps">{{ slotProps.lastName }}</NameList>
  <NameList v-slot:default="slotProps">{{ slotProps.firstName }}</NameList>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Computed from './components/Computed.vue';
import Conditional from './components/Conditional.vue';
import VModel from './components/VModel.vue';
import VueDirectiveVue from './components/VueDirective.vue';
import CustomButton from './components/CustomButton.vue';
import CardSlot from './components/CardSlot.vue'
import NameList from './components/NameList.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Computed,
    Conditional,
    VModel,
    VueDirectiveVue,
    CustomButton,
    CardSlot,
    NameList,
  }
}
</script>
