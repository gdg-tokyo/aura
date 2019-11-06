<template>
  <v-app class="white">

    <CoreToolbar/>
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

export default {
  name: 'App',
  components: {
    CoreDrawer,
    CoreToolbar,
    CoreFooter,
    CoreView,
    BottomNav
  },
  data () {
    return {
      //
    }
  }
}
</script>
