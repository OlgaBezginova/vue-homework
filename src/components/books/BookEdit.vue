<template>
  <div class="container">
    <h1>Edit Book "{{ book.title }}"</h1>

    <hr>

    <div class="alert alert-danger" role="alert" v-if="errors.length !== 0">
      <ul>
        <li v-for="error in errors">
          {{ error }}
        </li>
      </ul>
    </div>

    <form v-on:submit.prevent="updateBook">
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
      <input type="submit" class="btn btn-success mt-3" value="Save"/>
    </form>
  </div>
</template>

<script>
import useBooks from "../../composables/books";
import {onMounted} from "vue";
import {reactive} from "vue";

export default {
  name: "BookEdit",
  props: {
    id: {
      required: true,
      type: String,
    }
  },

  setup(props) {

    const { book, errors, users, getBook, editBook, getUsers } = useBooks()

    const form = reactive({
      title: "",
      description: "",
      user_id: "",
    })

    const prepareData = async () => {
      await getBook(props.id)
      await getUsers()
      form.title = book.value.title;
      form.description = book.value.description;
      form.user_id = book.value.user.id;
    }

    const updateBook = async () => {
      await editBook(props.id, form)
    }

    onMounted(prepareData)

    return {
      book,
      form,
      errors,
      users,
      updateBook
    }
  }
}
</script>

<style scoped>

</style>