<template>
  <!-- <v-container class="pa-0"> -->
  <v-layout wrap align-center justify-center row fill-height class="pb-4">
    <v-img
      :src="require('@/assets/img/devfest2019/image05.gif')"
      :lazy-src="require('@/assets/img/devfest2019/image05.gif')"
      width="100%"
    >
      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
      </v-layout>
    </v-img>
    <v-btn
      :href="devfestDetails.SponsorFormUrl"
      class="pa-8 ma-0 google-font elevation-1"
      target="_blank"
      color="#1a73e8"
      style="font-size:150%; text-transform: capitalize; border-radius:5px; color:white"
    >スポンサーになる</v-btn>
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
