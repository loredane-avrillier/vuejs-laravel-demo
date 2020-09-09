import Vue from 'vue'

import Router from 'vue-router'
import index from './components/pages/index'
import About from './components/pages/about'
import Product from './components/Product'
Vue.use(Router)

const routes = [
    {
        path: '/',
        component: index
    },
    {
        path: '/about',
        component: About
    },
    { 
        path: '/produit/:slug', 
        component: Product 
    }

]

export default new Router({
    mode: 'history',
    routes
}) 