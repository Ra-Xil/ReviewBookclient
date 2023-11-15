import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddPost from '../views/AddPost.vue'
import Post from '../views/Post.vue'
import EditPost from '../views/EditPost.vue'
import Login from '../views/Login.vue'
import PostAdmin from '../views/PostAdmin.vue'
import HomeAdmin from '../views/HomeAdmin'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/admin',
    name: 'HomeAdmin',
    component: HomeAdmin,
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPost,
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post,
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPost,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/postadmin/:id',
    name: 'postadmin',
    component: PostAdmin,
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
