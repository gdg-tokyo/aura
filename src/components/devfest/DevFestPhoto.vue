<template>
  <v-layout wrap align-center justify-center row fill-height>
    <v-img
      :src="require('@/assets/img/devfest/image04.png')"
      :lazy-src="require('@/assets/img/devfest/image04.png')"
      width="100%"
    >
      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
      </v-layout>
    </v-img>
  </v-layout>
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
