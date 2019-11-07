<template>
  <v-app class="white">
    <CoreToolbar v-show="$route.name.indexOf('devfest') == -1"/>
    <DevFestToolbar v-show="$route.name.indexOf('devfest') >= 0"/>
    <CoreDrawer/>
    <CoreView/>
    <CoreFooter/>
    <BottomNav/>
  </v-app>
</template>

<script>
import CoreDrawer from '@/components/common/Drawer'
import CoreToolbar from '@/components/common/Toolbar'
import CoreFooter from '@/components/common/Footer'
import CoreView from '@/components/common/View'
import BottomNav from '@/components/common/BottomNav'
import DevFestToolbar from '@/components/devfest2019/DevFestToolbar'

export default {
  name: 'App',
  components: {
    CoreDrawer,
    CoreToolbar,
    CoreFooter,
    CoreView,
    BottomNav,
    DevFestToolbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
