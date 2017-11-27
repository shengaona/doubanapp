import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PagesView from '../views/PagesView'
import MovieView from '../views/MovieView'
import BookView from '../views/BookView'
import Broadcast from '../views/Broadcast'
import Group from '../views/Group'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        },
        {
          path: 'broadcast',
          name: 'Broadcast',
          component: Broadcast
        },
        {
          path: 'group',
          name: 'Group',
          component: Group
        }
      ]
    }
  ]
})
