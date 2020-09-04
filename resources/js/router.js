import Vue from 'vue'

import Router from 'vue-router'
import index from './components/pages/index'
import About from './components/pages/about'
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

]

export default new Router({
    mode: 'history',
    routes
}) 