import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from'../views/LoginView.vue'
import TaskForm from '../views/TaskForm.vue'
import TaskItem from '../views/TaskItem.vue'
import TaskList from '../views/TaskList.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/formulario',
    name: 'taskForm',
    component: TaskForm
  },
  {
    path: '/items',
    name: 'taskItem',
    component: TaskItem
  },
  {
    path: '/lista/:id/',
    name: 'TaskList',
    component: TaskList
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
