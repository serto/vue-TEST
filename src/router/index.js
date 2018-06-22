import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components//pages/home';
import Info from '@/components/pages/info';
import Contact from '@/components/pages/contact';
import Search from '@/components/pages/search';
import PageNotFound from '@/components/pages/pageNotFound';
import Virales from '@/components/pages/virales';


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Home, props: { component: 'home' } },
    { path: '/my-info', name: 'My Info', component: Info, props: { component: 'myinfo' } },
    { path: '/contact/:name?/:ageUser?', name: 'Contact', component: Contact, props: { component: 'contact' } },
    { path: '/search', name: 'Search', component: Search, props: { component: 'search' } },
    { path: '/virales', name: 'Virales', component: Virales, props: { component: 'viral' } },
    { path: "*", component: PageNotFound }
  ],
  mode: 'history'
})

/*
  el mode history es per eliminar el # de la url
  si a una url li posem el ? despres d'un param significa opcional
*/