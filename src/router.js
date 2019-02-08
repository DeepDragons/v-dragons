import Vue from 'vue'
import Router from 'vue-router'
// import BuyEgg from './views/BuyEgg'
// import MyDragons from './views/MyDragons'
// import MarketPlace from './views/MarketPlace'
// import FightingGround from './views/FightingGround'
import Dragon from './views/Dragon'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'buy egg',
      // component: BuyEgg
      component: () => import('./views/BuyEgg')
    },
    {
      path: '/dragons',
      name: 'My Dragons',
      // component: MyDragons
      component: () => import('./views/MyDragons')
    },
    // ******** selected dragon ************ //
    {
      path: '/dragons/:id',
      name: false,
      component: Dragon
    },
    {
      path: '/market/:id',
      name: false,
      component: Dragon
    },
    // ******** selected dragon ************ //
    {
      path: '/market',
      name: 'Market Place',
      // component: MarketPlace
      component: () => import('./views/MarketPlace')
    },
    {
      path: '/fightingground',
      name: 'Fighting Ground',
      // component: FightingGround
      component: () => import('./views/FightingGround')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
