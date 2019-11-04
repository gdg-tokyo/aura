<template>
  <!-- <v-container class="pa-0"> -->
  <v-layout wrap align-center justify-center row fill-height class="pb-4">
    <v-img
      src="/img/devfest2019/kit/image05.gif"
      lazy-src="/img/devfest2019/kit/image05.gif"
      width="100%"
    >
      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
      </v-layout>
    </v-img>
    <v-flex xs12 sm4 text-xs-center>
      <div>
        <v-btn
          :href="devfestDetails.EntryPageUrl"
          class="pa-5 ma-0 google-font elevation-1"
          target="_blank"
          color="#34a851"
          style="font-size:150%; text-transform: capitalize; border-radius:5px; color:white"
        >参加申込<br />(Registration)</v-btn>
      </div>
      <br />
      <div>
        <v-btn
          :href="devfestDetails.SponsorFormUrl"
          class="pa-5 ma-0 google-font elevation-1"
          target="_blank"
          color="#1a73e8"
          style="font-size:150%; text-transform: capitalize; border-radius:5px; color:white"
        >スポンサーになる<br />(Call for Sponsor)</v-btn>
      </div>
    </v-flex>
  </v-layout>
  <!-- </v-container> -->
</template>

<script>
import DevFestDetails from "@/assets/data/devfest2019.json";
export default {
  data() {
    return {
      devfestDetails: DevFestDetails
    };
  }
};
</script>
