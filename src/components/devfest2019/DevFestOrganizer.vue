<template>
  <v-container class="pa-0">
    <!-- <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 sm2 md2 lg2 class="pa-2">
        <v-img
          :src="require('@/assets/img/devfest2019/image02.png')"
          :lazy-src="require('@/assets/img/devfest2019/image02.png')"
          width="250"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
      <v-flex xs12 sm7 md7 lg7 class="pa-2 text-xs-center">
        <p class="google-font" style="font-size:350%;">Organizers</p>
      </v-flex>
      <v-flex xs12 sm2 md2 lg2 class="pa-2">
        <v-img
          :src="require('@/assets/img/devfest2019/image03.png')"
          :lazy-src="require('@/assets/img/devfest2019/image03.png')"
          width="250"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
    </v-layout>-->
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 sm7 md7 lg7 class="pa-2 text-xs-center">
        <p class="google-font" style="font-size:250%;">協力</p>
      </v-flex>
    </v-layout>
    <v-layout wrap align-center justify-center row fill-height>
      <v-flex xs12 sm12 md12 lg12>
        <v-img
          :src="require('@/assets/img/devfest2019/image06.png')"
          :lazy-src="require('@/assets/img/devfest2019/image06.png')"
          width="60%"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
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
