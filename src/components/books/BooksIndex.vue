<template>
    <div class="container">
      <h2>Books</h2>
      <hr>
      <router-link :to="{ name: 'books.create' }">Add Book</router-link>
      <hr>
      <table class="table table-striped">
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>User</th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          <template v-for="book in books">
            <tr>
              <td>{{ book.id }}</td>
              <td><router-link :to="{ name: 'books.details', params: { id: book.id } }" class="nav-link">{{  book.title }}</router-link></td>
              <td>{{ book.user.name }}</td>
              <td><a href="#" @click.prevent="deleteBook(book.id)">Delete</a></td>
              <td><router-link :to="{ name: 'books.edit', params: { id: book.id } }">Edit</router-link></td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
</template>

<script>
import useBooks from "../../composables/books"
import { onMounted } from 'vue'

export default {
  name: "BooksIndex",
  setup() {
    const { books, getBooks, destroyBook } = useBooks()

    const deleteBook = async (id) => {
      if(!window.confirm('You sure?')) {
        return
      }

      await destroyBook(id)
      await getBooks()
    }

    onMounted(getBooks)

    return {
      books,
      deleteBook
    }

  }
}
</script>

<style scoped>

</style>