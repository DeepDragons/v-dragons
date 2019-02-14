import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'buy egg',
      component: () => import('./views/BuyEgg')
    },
    {
      path: '/dragons',
      name: 'My Dragons',
      component: () => import('./views/MyDragons')
    },
    {
      path: '/market',
      name: 'Market',
      component: () => import('./views/MarketPlace')
    },
    {
      path: '/fighting',
      name: 'Fighting',
      component: () => import('./views/FightingGround')
    },
    // {
    //   path: '/cemetery',
    //   name: 'Cemetery',
    //   component: () => import('./views/Cemetery')
    // },
    // ******** selected dragon ************ //
    {
      path: '/dragon/:id',
      name: false,
      component: () => import('./views/Dragon')
    },
    {
      path: '/battle/:id',
      name: false,
      component: () => import('./views/Battle')
    }
    // ******** selected dragon ************ //
  ]
})
