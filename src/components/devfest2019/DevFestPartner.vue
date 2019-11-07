<template>
  <v-container class="pa-0">
    <!-- 協賛 -->
    <v-layout wrap align-center justify-center row fill-height class="my-0">
      <v-flex xs10 sm8 md6 lg4 class="pt-5 text-xs-center">
        <p class="google-font display-1">{{ cosponsorship.designation}}</p>
      </v-flex>
    </v-layout>
    <v-flex v-for="(item, i) in cosponsorship.groups" :key="i">
      <v-layout
        wrap
        align-center
        justify-center
        row
        fill-height
        class="my-3"
      >
        <v-layout wrap align-center justify-center row fill-height>
          <v-flex xs10 sm8 md6 lg4>
            <a :href="item.link" target="_blank">
              <v-img :src="getStorageUrl(item.logo)" :lazy-src="getStorageUrl(item.logo)" :alt="item.name" width="80%" style="margin:0 auto;"></v-img>
            </a>
          </v-flex>
        </v-layout>
      </v-layout>
      <br />
      <br />
    </v-flex>
    <!-- xxパートナー -->
    <v-flex v-for="(item, i) in objectivePartner.groups" :key="i">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 sm6 md6 lg6 class="pt-5 text-xs-center">
          <p class="google-font display-1">{{ item.title}}</p>
        </v-flex>
      </v-layout>
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs10 sm8 md6 lg4>
          <a :href="item.link" target="_blank">
            <v-img :src="getStorageUrl(item.logo)" :lazy-src="getStorageUrl(item.logo)" :alt="item.name" width="80%" style="margin:0 auto;"></v-img>
          </a>
        </v-flex>
      </v-layout>
      <br />
      <br />
    </v-flex>
    <!-- 協力 -->
    <v-layout wrap align-center justify-center row fill-height class="my-0">
      <v-flex xs12 sm6 md6 lg6 class="pt-5 text-xs-center">
        <p class="google-font display-1">{{ partnership.designation}}</p>
      </v-flex>
    </v-layout>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex
        xs10 sm8 md6 lg4
        v-for="(item, i) in partnership.groups"
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
  </v-container>
</template>

<script>
import DevFestInfo from "@/assets/data/devfest2019.json";
import Mixin from "@/mixin.js";
export default {
  data() {
    return {
      cosponsorship: DevFestInfo.Partners.Cosponsorship,
      objectivePartner: DevFestInfo.Partners.ObjectivePartner,
      partnership: DevFestInfo.Partners.Partnership
    };
  },
  mixins: [Mixin]
};
</script>
