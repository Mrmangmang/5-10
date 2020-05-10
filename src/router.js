import Vue from 'vue'
import Router from 'vue-router'
import routes from './common/config/router.js'


//这是一个bug
const routerPush =  Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}

Vue.use(Router)

export default new Router ({  routes }) 