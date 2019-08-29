<template>
  <v-container class="pa-0">
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 md9 lg9 class="pa-2 text-xs-center">
        <p class="google-font display-2">Sponsors</p>
      </v-flex>
    </v-layout>
    <!-- Goldスポンサー -->
    <v-layout wrap align-center justify-center row fill-height class="my-0">
      <v-flex xs12 sm6 md6 lg6 class="pt-5 text-xs-center">
        <p class="google-font display-1">Gold</p>
      </v-flex>
    </v-layout>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex
        xs6
        sm6
        md6
        lg6
        v-for="(item, i) in goldSponsors"
        :key="i"
        class="text-xs-center"
        style="text-align:center"
      >
        <div class="text-xs-center ma-1 pa-1 my-0">
          <v-img
            :src="'/img/devfest2019/organizers/avatar.png'"
            :lazy-src="'/img/devfest2019/organizers/avatar.png'"
          >
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
        </div>
      </v-flex>
    </v-layout>
    <!-- Silverスポンサー -->
    <v-layout wrap align-center justify-center row fill-height class="my-0">
      <v-flex xs12 sm6 md6 lg6 class="pt-5 text-xs-center">
        <p class="google-font display-1">Silver</p>
      </v-flex>
    </v-layout>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex
        xs4
        sm4
        md4
        lg4
        v-for="(item, i) in silverSponsors"
        :key="i"
        class="text-xs-center"
        style="text-align:center"
      >
        <div class="text-xs-center ma-1 pa-1 my-0">
          <v-img
            :src="'/img/devfest2019/organizers/avatar.png'"
            :lazy-src="'/img/devfest2019/organizers/avatar.png'"
          >
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DevFestInfo from "@/assets/data/devfest2019.json";
export default {
  data() {
    return {
      sponsors: DevFestInfo.Sponsors
    };
  },
  computed: {
    goldSponsors: function() {
      return this.sponsors.filter(item => {
        return item.designation == 'gold';
      }, this);
    },
    silverSponsors: function() {
      return this.sponsors.filter(item => {
        return item.designation == 'silver';
      }, this);
    }
  }
};
</script>
