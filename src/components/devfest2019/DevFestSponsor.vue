<template>
  <v-container class="pa-0">
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 sm2 md2 lg2 class="pa-2">
        <v-img
          src="/img/devfest2019/kit/image02.png"
          lazy-src="/img/devfest2019/kit/image02.png"
          width="250"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
      <v-flex xs12 sm7 md7 lg7 class="pa-2 text-xs-center">
        <p class="google-font display-2">Sponsors</p>
      </v-flex>
      <v-flex xs12 sm2 md2 lg2 class="pa-2">
        <v-img
          src="/img/devfest2019/kit/image03.png"
          lazy-src="/img/devfest2019/kit/image03.png"
          width="250"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
    </v-layout>
    <!-- Platinumスポンサー -->
    <v-layout wrap align-center justify-center row fill-height class="my-0">
      <v-flex xs12 sm6 md6 lg6 class="text-xs-center">
        <p class="google-font display-1">Platinum</p>
      </v-flex>
    </v-layout>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex
        xs12 sm8 md6 lg6
        v-for="(item, i) in platinumSponsors"
        :key="i"
        class="text-xs-center"
        style="text-align:center"
      >
        <div class="text-xs-center ma-1 pa-1 my-0">
          <a :href="item.link" target="_blank">
          <v-img
            :src="getStorageUrl(item.logo)"
            :lazy-src="getStorageUrl(item.logo)"
            :alt="item.name"
          >
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
          </a>
        </div>
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
        xs10 sm7 md5 lg5
        v-for="(item, i) in goldSponsors"
        :key="i"
        class="text-xs-center"
        style="text-align:center"
      >
        <div class="text-xs-center ma-1 pa-1 my-0">
          <a :href="item.link" target="_blank">
          <v-img
            :src="getStorageUrl(item.logo)"
            :lazy-src="getStorageUrl(item.logo)"
            :alt="item.name"
          >
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
          </a>
        </div>
      </v-flex>
    </v-layout>
    <!-- Silverスポンサー -->
    <!-- <v-layout wrap align-center justify-center row fill-height class="my-0">
      <v-flex xs12 sm6 md6 lg6 class="pt-5 text-xs-center">
        <p class="google-font display-1">Silver</p>
      </v-flex>
    </v-layout>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex
        xs8 sm5 md3 lg3
        v-for="(item, i) in silverSponsors"
        :key="i"
        class="text-xs-center"
        style="text-align:center"
      >
        <div class="text-xs-center ma-1 pa-1 my-0">
          <a :href="item.link" target="_blank">
          <v-img
            :src="item.logo"
            :lazy-src="item.logo"
            :alt="item.name"
          >
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
          </a>
        </div>
      </v-flex>
    </v-layout> -->
    <!-- 個人スポンサー -->
    <v-layout wrap align-center justify-center row fill-height class="my-0">
      <v-flex xs12 sm6 md6 lg6 class="pt-5 text-xs-center">
        <p class="google-font display-1">個人</p>
      </v-flex>
    </v-layout>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex
        xs3 sm2 md1 lg1
        v-for="(item, i) in personalSponsors"
        :key="i"
        class="text-xs-center"
        style="text-align:center"
      >
        <div class="text-xs-center ma-1 pa-1 my-0">
          <a :href="item.link" target="_blank">
          <v-img
            :src="getStorageUrl(item.logo)"
            :lazy-src="getStorageUrl(item.logo)"
            :alt="item.name"
          >
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
          </a>
          <p class="google-font">{{item.name}}</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DevFestInfo from "@/assets/data/devfest2019.json";
import Mixin from "@/mixin.js";
export default {
  data() {
    return {
      sponsors: DevFestInfo.Sponsors
    };
  },
  computed: {
    platinumSponsors: function() {
      return this.sponsors.filter(item => {
        return item.designation == 'platinum';
      }, this);
    },
    goldSponsors: function() {
      return this.sponsors.filter(item => {
        return item.designation == 'gold';
      }, this);
    },
    silverSponsors: function() {
      return this.sponsors.filter(item => {
        return item.designation == 'silver';
      }, this);
    },
    personalSponsors: function() {
      return this.sponsors.filter(item => {
        return item.designation == 'personal';
      }, this);
    }
  },
  mixins: [Mixin]
};
</script>
