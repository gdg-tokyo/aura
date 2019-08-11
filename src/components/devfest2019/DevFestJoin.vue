<template>
  <v-container class="pa-0">
    <v-layout wrap align-center justify-center row fill-height>
      <v-flex xs12 sm12 md12 lg12 class="pa-2 text-xs-center">
        <p class="google-font" style="font-size: 350%; color: white">GDG DevFest Tokyo 2019</p>
      </v-flex>
      <!-- <v-btn :href="chapterDetails.ChapterMeetupLink" target="_blank" class="ma-0 google-font elevation-1" color="white" style="text-transform: capitalize; border-radius:5px; color:black; padding: 0px 32px">参加する</v-btn> -->
    </v-layout>
  </v-container>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
export default {
  data() {
    return {
      chapterDetails: ChapterDetails
    };
  }
};
</script>
