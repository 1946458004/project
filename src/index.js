import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import Mintui from "mint-ui"
Vue.use(Mintui)
import "mint-ui/lib/style.css"
import app from "./App.vue"
import VueResource from "vue-resource"
Vue.use(VueResource)
import "../lib/mui/css/mui.min.css"
import "../lib/mui/css/icons-extra.css"
import router from "./router"

var vm=new Vue({
    el: "#app",
    render:c=>c(app),
    router
})





