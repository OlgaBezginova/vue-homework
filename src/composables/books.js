import { ref } from 'vue'
import http from '../http.js'
import { useRouter } from 'vue-router'

export default function useBooks() {
    const book = ref([]);
    const books = ref([]);
    const users = ref([]);

    const errors = ref([]);
    const router = useRouter();

    const getUsers = async () => {
        let response = await http.get('/api/v1/users')
        users.value = response.data.data
    }

    const getBooks = async () => {
        let response = await http.get('/api/v1/books')
        books.value = response.data.data
    }

   const destroyBook = async (id) => {
       errors.value = []

       try {
           await http.delete(`/api/v1/books/${id}`)
       } catch (e) {
           errors.value.push(e.message);
       }
    }

    const createBook = async (data) => {
        errors.value = []

        try {
            await http.post(`/api/v1/books`, data)
            await router.push({ name: 'books.index' })
        } catch (e) {
            if(e.response.status === 422) { //validation error
                for(const key in e.response.data.errors) {
                    errors.value.push(e.response.data.errors[key][0]);
                }
            }
        }
    }

    const getBook = async (id) => {
        errors.value = []

        try {
            let response = await http.get(`/api/v1/books/${id}`)
            book.value = response.data.data
        } catch (e) {
            errors.value.push(e.message);
        }
    }

    const editBook = async (id, data) => {
        errors.value = []

        try {
            await http.put(`/api/v1/books/${id}`, data)
            await router.push({ name: 'books.index' })
        } catch (e) {
            if(e.response.status === 422) { //validation error
                for(const key in e.response.data.errors) {
                    errors.value.push(e.response.data.errors[key][0]);
                }
            } else {
                errors.value.push(e.message);
            }
        }
    }

    return {
        errors,
        book,
        books,
        users,
        getBook,
        getBooks,
        destroyBook,
        createBook,
        editBook,
        getUsers
    }
}