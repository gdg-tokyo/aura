<template>
  <!-- <v-container class="pa-0"> -->
  <v-layout wrap align-center justify-center row fill-height class="pb-4">
    <v-img
      :src="getStorageUrl('https://storage.googleapis.com/gdgtokyo_img/devfest19/misc/topimg')"
      :lazy-src="getStorageUrl('https://storage.googleapis.com/gdgtokyo_img/devfest19/misc/topimg')"
      alt="GDG DevFest 2020"
      width="100%"
    >
      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
      </v-layout>
    </v-img>
    <v-flex xs12 sm4 text-xs-center>
      <!-- <div>
        <v-btn
          :href="devfestDetails.EntryPageUrl"
          class="pa-5 ma-0 google-font elevation-1"
          target="_blank"
          color="#34a851"
          style="font-size:150%; text-transform: capitalize; border-radius:5px; color:white"
        >参加申込<br />(Registration)</v-btn>
      </div> -->
      <!-- <br />
      <div>
        <v-btn
          :href="devfestDetails.PamphletUrl"
          class="pa-5 ma-0 google-font elevation-1"
          target="_blank"
          color="#1a73e8"
          style="font-size:150%; text-transform: capitalize; border-radius:5px; color:white"
        >パンフレット<br />(Pamphlet)</v-btn>
      </div> -->
    </v-flex>
  </v-layout>
  <!-- </v-container> -->
</template>

<script>
import DevFestDetails from "@/assets/data/devfest2020.json";
import Mixin from "@/mixin.js";
export default {
  data() {
    return {
      devfestDetails: DevFestDetails
    };
  },
  mixins: [Mixin]
};
</script>
