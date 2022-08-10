<template>
  <div class="container">
    <h1>Add Book</h1>
    <hr>

    <div class="content-actions">
      <router-link :to="{ name: 'books.create'}">
        Add Book
      </router-link>
    </div>

    <hr>

    <div class="alert alert-danger" role="alert" v-if="errors.length !== 0">
      <ul>
        <li v-for="error in errors">
          {{ error }}
        </li>
      </ul>
    </div>

    <form v-on:submit.prevent="saveBook">
      <div class="mb3 mt-3">
        <label for="title" class="form-label">Title</label>
        <input class="form-control" type="text" name="title" v-model="form.title" placeholder="Title" id="title">
      </div>
      <div class="mb3 mt-3">
        <label for="description" class="form-label">Description</label>
        <input class="form-control" type="text" name="description" v-model="form.description" placeholder="Description" id="description">
      </div>
      <div class="mb3 mt-3">
        <label for="user" class="form-label">User</label>
        <select class="form-control" v-model="form.user_id" name="user_id" id="user">
          <option v-for="user in users" :value="user.id">{{ user.name }}</option>
        </select>
      </div>
      <input type="submit" class="btn btn-success mt-3" value="Add"/>
    </form>
  </div>
</template>

<script>
import useBooks from "../../composables/books";
import {reactive} from "vue";
import {onMounted} from "vue";

export default {
  name: "BooksCreate",
  setup() {
    const form = reactive({
      title: "",
      description: "",
      user_id: "",
    })

    const { errors, users, createBook, getUsers } = useBooks()

    const saveBook = async () => {
      await createBook(form)
    }

    onMounted(getUsers)

    return {
      form,
      errors,
      users,
      saveBook
    }
  }
}
</script>

<style scoped>

</style>