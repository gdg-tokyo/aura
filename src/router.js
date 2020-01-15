import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const metaTitle = "GDG Tokyo";
const metaDescription = "Google Developer Group（GDG）Tokyoは、Googleのテクノロジーを学ぶことができるコミュニティとして勉強会やカンファレンスを主催・運営しています。";

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '*',
      name: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('./views/Team.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('./views/Events.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/devfest2019/hands-on',
      name: 'devfest_hands_on_detail',
      component: () => import('./views/DevFest2019HandsOnDetail.vue'),
    },
    {
      path: '/devfest2019/session/panel-discussion',
      name: 'devfest_session_detail_panel_discussion',
      component: () => import('./views/DevFest2019PanelDiscussionDetail.vue'),
    },
    {
      path: '/devfest2019/session/:id',
      name: 'devfest_session_detail',
      component: () => import('./views/DevFest2019Detail.vue'),
    },
    {
      path: '/devfest2019',
      name: 'devfest',
      component: () => import('./views/DevFest2019.vue'),
      meta: { title: 'DevFest2019 | GDG Tokyo', description: 'DevFest は、Google Developer Group (GDG) コミュニティによって世界各地で開かれるデベロッパー向けイベントです。東京では、Android、Google Cloud Platform（GCP）、Web、Firebase、Machine Learning （ML）、Assistant、Flutter、Goといった様々な技術の最新情報や現場でのノウハウを一日で学べるコミュニティイベントとして開催しています。' }
    },
    {
      path: '/devfest2019/schedule',
      name: 'devfest_schedule',
      component: () => import('./views/devfest2019/DevFest2019Schedule.vue')
    }
  ]
})

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = metaTitle
  }
  if (to.meta && to.meta.description) {
    document.querySelector("meta[name='description']").setAttribute('content', to.meta.description)
    document.querySelector("meta[property='og:description']").setAttribute('content', to.meta.description)
  } else {
    document.querySelector("meta[name='description']").setAttribute('content', metaDescription)
    document.querySelector("meta[property='og:description']").setAttribute('content', metaDescription)
  }
})

export default router
