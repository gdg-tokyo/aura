import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [ 
      { text: 'DevFest', to: '/devfest2019', icon: 'favorite', color: 'red'},
      { text: 'Home', to: '/home', icon:'home'},
      { text: 'Events', to: '/events', icon: 'rounded_corner'},
      { text: 'Team', to: '/team', icon:'group'},
      { text: 'About', to: '/about', icon: 'toc'},
      { text: 'Contact', to: '/contact', icon:'person'}
    ],
    devfestItems: [
      { text: 'Speaker', to: '/devfest2019#speaker', icon: 'favorite'},
      { text: 'Sponsor', to: '/devfest2019#sponsor', icon: 'favorite'},
      // { text: 'Sessions', to: '/devfest2019/sessions', icon: 'favorite'},
    ]
  },
  getters:{
    links: (state) => {
      return state.items
    },
    devfestLinks: (state) => {
      return state.devfestItems
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
