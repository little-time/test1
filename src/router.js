import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import News from '@/views/Home/News'
import About from '@/views/Home/About'
import Users from '@/views/Home/Users'
import Story from '@/views/Admin/Story'
import Book from '@/views/Admin/Book'
import Admin from '@/views/Admin'
import Test from '@/views/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/news',
          name: 'news',
          component: News
        },
        {
          path: '/users',
          name: 'users',
          component: Users
        },
        {
          path: '/about',
          name: 'about',
          component: About
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          // 当 /admin/story 匹配成功，
          // Story 会被渲染在 Admin 的 <router-view> 中
          path: 'story',
          name: 'story',
          component: Story
        },
        {
          // 当 /admin/book 匹配成功
          // Book 会被渲染在 Admin 的 <router-view> 中
          path: 'book',
          name: 'book',
          component: Book
        }
      ]
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
