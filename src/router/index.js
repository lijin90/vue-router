import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 跟路由
import Header from './../views/Header'
// 404
import Nofound from './../views/Nofound'

import shouye from '@/components/shouye/shouye'
import about from '@/components/about/about'
import list from '@/components/list/list'
import menu from '@/components/menu/menu'
import detail from '@/components/detail/detail'

// 二级路由
import detail1 from '@/components/detail/details/detail1'
import detail2 from '@/components/detail/details/detail2'
import detail3 from '@/components/detail/details/detail3'
import detail4 from '@/components/detail/details/detail4'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header,
      redirect: 'shouye',
      children: [
        {
          path: '/shouye',
          name: 'shouye',
          component: shouye
        },
        {
          path: '/about',
          name: 'about',
          component: about
        }, {
          path: '/menu',
          name: 'menu',
          component: menu
        }, {
          path: '/list/:num',
          name: 'list',
          component: list
        }, {
          path: '/detail',
          name: 'detail',
          component: detail,
          redirect: 'detail4',
          children: [
            {
              path: '/detail1',
              name: 'detail1',
              component: detail1
            },
            {
              path: '/detail2',
              name: 'detail2',
              component: detail2
            },
            {
              path: '/detail3',
              name: 'detail3',
              component: detail3
            },
            {
              path: '/detail4',
              name: 'detail4',
              component: detail4
            },
          ]
        }
      ]
    },
    {
      path: "/Nofound",
      name: "Nofound",
      component: Nofound
      }, 
      {
      path: "*", // 此处需特别注意置于最底部
      redirect: "/Nofound"
      }

  ]
})
