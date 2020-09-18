<template>
  <v-container class="pa-0">
    <v-layout wrap align-center justify-center row fill-height>
      <v-flex xs12 sm12 md12 lg12 class="pa-2 text-xs-center">
        <p class="google-font" style="font-size: 350%; color: white">GDG DevFest Tokyo 2019</p>
      </v-flex>
      <v-flex xs12 sm4 text-xs-center>
        <div>
          <v-btn
            :href="devfestDetails.EntryPageUrl"
            class="pa-5 ma-0 google-font elevation-1"
            target="_blank"
            color="white"
            style="font-size:150%; text-transform: capitalize; border-radius:5px; color:rgb(26, 115, 232)"
          >参加申込<br />(Registration)</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DevFestDetails from "@/assets/data/devfest2020.json";
export default {
  data() {
    return {
      devfestDetails: DevFestDetails,
    };
  }
};
</script>
