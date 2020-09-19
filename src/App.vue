<template>
  <v-app class="white">
    <CoreToolbar v-if="$route.name.indexOf('devfest') == -1"/>
    <DevFestToolbar v-else/>
    <CoreDrawer/>
    <CoreView/>
    <CoreFooter/>
    <BottomNav v-if="$route.name.indexOf('devfest') == -1"/>
    <DevFestBottomNav v-else/>
  </v-app>
</template>

<script>
import CoreDrawer from '@/components/common/Drawer'
import CoreToolbar from '@/components/common/Toolbar'
import CoreFooter from '@/components/common/Footer'
import CoreView from '@/components/common/View'
import BottomNav from '@/components/common/BottomNav'
import DevFestToolbar from '@/components/devfest2020/DevFestToolbar'
import DevFestBottomNav from '@/components/devfest2020/DevFestBottomNav'

export default {
  name: 'App',
  components: {
    CoreDrawer,
    CoreToolbar,
    CoreFooter,
    CoreView,
    BottomNav,
    DevFestToolbar,
    DevFestBottomNav
  },
  data () {
    return {
      //
    }
  }
}
</script>
