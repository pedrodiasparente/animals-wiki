import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Animals from '../views/Animals.vue'
import Animal from '../views/Animal.vue'
import Classification from '../views/Classification.vue'
import AdvancedSearch from '../views/AdvancedSearch.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/animals',
        name: 'Animals',
        component: Animals
    },
    {
        path: '/animal/:id',
        name: 'Animal',
        component: Animal
    },
    {
        path: '/classification/:id',
        name: 'Classification',
        component: Classification
    },
    {
        path: '/search',
        name: 'Advanced Search',
        component: AdvancedSearch
    },
    {
        path: '/login',
        name: "Login",
        component: Login
    },
    {
        path: '/register',
        name: "Register",
        component: Register
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
