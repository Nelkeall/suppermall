import Vue from 'vue'
import Router from "vue-router"
const home = ()=> import("../views/home/home")
const cart = ()=> import("../views/cart/cart")
const my = ()=> import("../views/my/my")
const category = ()=> import("../views/category/category")

Vue.use(Router)

const router = new Router({
	mode:"history",
	routes: [{
			path: '/',
			redirect:"/home"
		},
		{
			path: '/home',
			component: home
		},
		{
			path: '/cart',
			component: cart
		},
		{
			path: '/my',
			component: my
		},
		{
			path: '/category',
			component: category
		}
	]
})

export default router