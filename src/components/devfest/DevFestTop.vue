<template>
  <v-container class="pa-0">
    <v-layout wrap align-center justify-center row fill-height>
      <v-img
        :src="require('@/assets/img/devfest/image01.png')"
        :lazy-src="require('@/assets/img/devfest/image01.png')"
        width="100%"
      >
        <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-layout>
      </v-img>
      <!-- <v-btn :href="chapterDetails.ChapterMeetupLink" target="_blank" class="ma-0 google-font elevation-1" color="#1a73e8" style="text-transform: capitalize;border-radius:5px;color:white">スポンサーになる</v-btn> -->
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
