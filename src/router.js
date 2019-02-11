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
    // ******** selected dragon ************ //
    {
      path: '/dragon/:id',
      name: false,
      component: () => import('./views/Dragon')
    },
    // ******** selected dragon ************ //
    {
      path: '/market',
      name: 'Market Place',
      component: () => import('./views/MarketPlace')
    },
    {
      path: '/fightingground',
      name: 'Fighting Ground',
      component: () => import('./views/FightingGround')
    },
    {
      path: '/cemetery',
      name: 'Cemetery',
      component: () => import('./views/Cemetery')
    }
  ]
})
