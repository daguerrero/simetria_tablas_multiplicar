import Vue from 'vue'
import Router from 'vue-router'
import Inicial from '@/components/Inicial'
import Caso2 from '@/components/Caso2'
import Caso4 from '@/components/Caso4'
import Caso6 from '@/components/Caso6'
import Caso10 from '@/components/Caso10'
import Caso12 from '@/components/Caso12'
import Caso2y3 from '@/components/Caso2-3'
import Caso3y2 from '@/components/Caso3-2'
import Caso23y6 from '@/components/Caso2-3-6'
import Caso6y12 from '@/components/Caso6-12'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inicial',
      component: Inicial
    },
    {
      path: '/caso2',
      name: 'Caso2',
      component: Caso2
    },
    {
      path: '/caso4',
      name: 'Caso4',
      component: Caso4
    },
    {
      path: '/caso6',
      name: 'Caso6',
      component: Caso6
    },
    {
      path: '/caso10',
      name: 'Caso10',
      component: Caso10
    },
    {
      path: '/caso12',
      name: 'Caso12',
      component: Caso12
    },
    {
      path: '/caso2y3',
      name: 'Caso2y3',
      component: Caso2y3
    },
    {
      path: '/caso3y2',
      name: 'Caso3y2',
      component: Caso3y2
    },
    {
      path: '/caso23y6',
      name: 'Caso23y6',
      component: Caso23y6
    },
    {
      path: '/caso6y12',
      name: 'Caso6y12',
      component: Caso6y12
    }
  ]
})