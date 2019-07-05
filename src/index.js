import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
import app from "./app.vue"
import "../lib/mui/css/mui.min.css"

Vue.use(MintUI)

var vm=new Vue({
    el: '#app',
    render:c=>c(app)
})



