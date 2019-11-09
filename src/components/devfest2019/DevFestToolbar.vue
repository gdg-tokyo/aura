<template>
  <v-toolbar
    app
    color="white"
    height="55px"
    fixed
  >
    <v-toolbar-side-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"

    />
    <v-toolbar-title class="ml-0 pl-1 mr-1">
      <span class="google-font"><a href="#" style="text-decoration:none; color:black;">GDG DevFest Tokyo 2019</a></span>
    </v-toolbar-title>
    <v-spacer />
    <v-btn text flat class="hidden-sm-and-down" color="blue" href="/devfest2019#speaker">Speakers</v-btn>
    <v-btn text flat class="hidden-sm-and-down" color="blue" href="/devfest2019#sponsor">Sponsors</v-btn>
    <v-btn text class="white--text" color="blue" :href="devfestInfo.EntryPageUrl">受付 / Registration</v-btn>
  </v-toolbar>
</template>

<script>
import DevFestInfo from "@/assets/data/devfest2019.json";
  // Utilities
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        devfestInfo: DevFestInfo
      }
    },
    computed: {
      ...mapGetters(['devfestLinks'])
    },
    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()
        if (item.to || !item.href) return
        this.$vuetify.goTo(item.href)
      }
    }
  }
</script>