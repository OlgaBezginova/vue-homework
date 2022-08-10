import { createRouter, createWebHistory } from 'vue-router'
import MyComponent from "../components/MyComponent.vue";
import MyComponent2 from "../components/MuComponent2.vue";
import booksIndex from "../components/books/booksIndex.vue";
import booksCreate from "../components/books/booksCreate.vue";
import bookDetails from "../components/books/bookDetails.vue";
import bookEdit from "../components/books/BookEdit.vue";
import dashboard from "../components/Dashboard.vue";

const routes = [
    {
        path: '/my-comp-1',
        name: 'myComp1',
        component: MyComponent
    },
    {
        path: '/my-comp-2',
        name: 'myComp2',
        component: MyComponent2
    },
    {
        path: '/books',
        name: 'books.index',
        component: booksIndex
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard
    },
    {
        path: '/books/create',
        name: 'books.create',
        component: booksCreate
    },

    {
        path: '/books/:id/details',
        name: 'books.details',
        component: bookDetails,
        props: true,
    },

    {
        path: '/books/:id/edit',
        name: 'books.edit',
        component: bookEdit,
        props: true,
    },
];

export default createRouter( {
    history: createWebHistory(),
    routes
})