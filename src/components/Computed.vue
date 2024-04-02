<template>
  <div>
    <h1>Computed</h1>
    <h2>Fullname: {{ firstName }} {{ lastName }}</h2>
    <h2>Computed FullName: {{ fullName }}</h2>
    <button @click="changeName">Change Full Name</button>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.name }} - ${{ item.price }}
      </li>
    </ul>
    <button @click="addItem">Add Item</button>
    <p>Total: ${{ total }}</p>
    <p>Method Total: {{ getTotal }}</p> 
    <span>Check the Computed property: <input v-model="check"/></span>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      firstName: 'Bruce',
      lastName: 'Wayne',
      check:'',
      items: [
        { name: 'Item 1', price: 10 },
        { name: 'Item 2', price: 20 },
        { name: 'Item 3', price: 30 },
      ],
    }
  },
  methods: { // Changed from method to methods
    getTotal() {
      console.log('Method Property');
      return this.items.reduce((acc, item) => acc + item.price, 0);
    },
    addItem() { // Added a method to add an item
      this.items.push({ name: 'Item 4', price: 40 });
    },
    changeName() {
      this.fullName = 'Clark kin';
    }
  },
  computed: {
    fullName:{
      get(){
        return `${this.firstName} ${this.lastName}`
      },
      set(value){
        const names=value.split(' ');
        this.firstName=names[0];
        this.lastName=names[1];
      }
    },
    total() {
      console.log('Computed Property');
      return this.items.reduce((acc, item) => acc + item.price, 0);
    },
  }
}
</script>
