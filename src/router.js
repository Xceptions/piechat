import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Home from "./views/HomePage.vue"

Vue.use(Router);

export default new Router ({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "login",
            component: Login
        },
        {
            path: "/home",
            name: 'homepage',
            component: Home
        }
    ]
})



/*
 *
 import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '@/components/WelcomePage'
import HomePage from '@/components/HomePage'
import InksPage from '@/components/InksPage'
import BuildsPage from '@/components/Builds/BuildsPage'
import CreateBuild from '@/components/Builds/CreateBuild'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage,
      children: [
        {
          path: 'inks',
          component: InksPage
        },
        {
          path: 'builds',
          component: BuildsPage
        },
        {
          path: 'createbuild',
          component: CreateBuild
        }
      ]
    },
    // otherwise redirect to home
    {path: '*', redirect: '/'}
  ]
})

*/