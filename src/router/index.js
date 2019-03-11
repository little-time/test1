import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import UserInfo from '@/components/Home/UserInfo'
import NewsDetails from '@/components/News/NewsDetails'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/userinfo',
      name: 'UserInfo',
      component: UserInfo
    }, {
      path: '/news',
      name: 'News',
      component: News
    }, {
      path: '/newsdetail',
      name: 'NewsDetails',
      component: NewsDetails
    }

  ]
})
