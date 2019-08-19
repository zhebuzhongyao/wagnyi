import Home from '../pages/home/Home.vue'
import Sort from '../pages/sort/Sort.vue'
import Shop from '../pages/shop/Shop.vue'
import Person from '../pages/person/Person.vue'
import Shopcart from '../pages/shopCart/ShopCart'
import Search from '../pages/search/Search.vue'
import Phone from '../pages/phone/Phone.vue'


export default[
  {
    path:"/home",
    component:Home,
    meta:{
      showFooter:true//是否显示footer
    }
    
  },
  {
    path: "/sort",
    component: Sort,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/shopcart",
    component: Shopcart,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/shop",
    component: Shop,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/person",
    component: Person,
    meta: {
      showFooter: false
    },
    children:[
      {
        path: "/person/phone",
        component: Phone,
      }
    ]
  },
  {
    path: "/search",
    component: Search,
    meta: {
      showFooter: false
    }
  },
  {
    path: "",
    redirect: '/home',

  }
]