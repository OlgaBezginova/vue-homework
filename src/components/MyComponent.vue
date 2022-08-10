<template>
  <h1>This is My Component ({{ state.count }})</h1>
  <h2>{{ form.itemTitle }}</h2>
  <br>
  <button @click="increment">Count ({{ state.count }})</button>
<ul>
  <li v-for="(item, index) in list">{{ index }}.{{ item }}</li>
</ul>
  <br>
  <br>

  <form @submit.prevent="addItem">
    <input type="text" name="item_title" v-model="form.itemTitle" placeholder="Item Title">
    <button type="submit">Add</button>
  </form>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "MyComponent",
  setup() {
    const state = reactive({ count: 0 })
    const list = reactive([1,2])
    const form = reactive({
      itemTitle: ''
    })


    function increment() {
        state.count++
    }

    function addItem() {
      list.push(form.itemTitle);
      console.log(form);
    }

    return {
      state,
      list,
      form,
      increment,
      addItem
    }
  }
}
</script>

<style scoped>

</style>