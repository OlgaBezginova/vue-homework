<template>
  <div class="container">
    <h1>{{ book.title }}</h1>
    <hr>
    <p>{{ book.description }}</p>
    <hr>
    <router-link :to="{ name: 'books.edit', params: { id: this.props.id } }">Edit</router-link>
  </div>
</template>

<script>

import useBooks from "../../composables/books";
import {onMounted} from "vue";

export default {
  name: "BookDetails",
  props: {
    id: {
      required: true,
      type: String,
    }
  },

  setup(props) {
    const { book, getBook } = useBooks()

    onMounted(getBook(props.id))

    return {
      book,
      props
    }
  }
}
</script>

<style scoped>

</style>