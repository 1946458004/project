import VueRouter from "vue-router"

import Home from "../commponents/HomeContainer.vue"
import Search from "../commponents/SearchContainer.vue"
import ShopCar from "../commponents/ShopCarContainer.vue"
import Member from "../commponents/MemberCotainer.vue"

var router=new VueRouter(
{
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:Home},
        {path:"/member",component:Member},
        {path:"/shopCar",component:ShopCar},
        {path:"/search",component:Search}
    ],
        linkActiveClass:"mui-active"
})
export default  router