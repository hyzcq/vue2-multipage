import Vue from 'vue'
import VueRouter from 'vue-router'

import Add from './add'
import List from './list'

const routes = [
	{ path: '/', component: Add },
	{ path: '/list', component: List }
]

Vue.use(VueRouter)

const router = new VueRouter({
	routes:routes
})

new Vue({
	router: router
}).$mount('#app')
