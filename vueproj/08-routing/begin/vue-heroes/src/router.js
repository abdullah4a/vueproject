import Vue from 'vue'
import Router from 'vue-router'
import PageNotFound from './views/page-not-found.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/heroes',
        },
        {
            path: '/heroes',
            name: 'heroes',
            // component: heroes
            component: () =>
                import (
                    /*webpackChukName:"bundle-heroes"*/
                    './views/heroes.vue'),
        },
        {
            path: '/heroes/:id',
            name: 'hero-detail',
            // component: HeroDetail,
            component: () =>
                import (
                    /*webpackChukName:"bundle-heroes"*/
                    './views/hero-detail.vue'),
            props: r => ({ id: parseInt(r.params.id) }),
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import (
                    /*webpackChukName:"bundle-about"*/
                    './views/about.vue')
        },
        {
            path: '*',
            component: PageNotFound,
        }
    ]
})