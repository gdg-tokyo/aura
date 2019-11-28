<template>
  <v-container class="px-3">
    <v-img class="pa-3" max-height="250" min-width="300" :src="getStorageUrl(scheduleImageUrl)"></v-img>
  </v-container>
</template>

<script>
import Mixin from "@/mixin.js";

export default {
  data: () => ({
    scheduleImageUrl:
      "https://storage.googleapis.com/gdgtokyo_img/devfest19/misc/schedule"
  }),
  mixins: [Mixin]
};
</script>
