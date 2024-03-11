<template>
  <div>
    <h1>Hello World</h1>
    <h2>{{ msg }}</h2>
    <h1> Hello {{ name }}</h1>
    <h2>{{ greet }}</h2>
    <h2 v-text="text"></h2>
    <p v-html="html"></p>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      name:"Sunanth",
      greet:"Welcome to Vue",
      text:"Binding text using v-text",
      html:"<u><b>Binding html directly using v-html</b></u>",
    }
  }
}
</script>
