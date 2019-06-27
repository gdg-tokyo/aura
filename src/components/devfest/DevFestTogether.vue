<template>
  <v-container class="pa-0">
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 md9 lg9 class="pa-2 text-xs-center">
        <p class="google-font" style="font-size:350%;">Together</p>
      </v-flex>
    </v-layout>
    <v-layout wrap align-center justify-center row fill-height class="my-0">
      <v-flex xs12 sm2 md2 lg2 class="pa-2 text-xs-center">
        <v-img
          :src="require('@/assets/img/devfest/and_icon.png')"
          :lazy-src="require('@/assets/img/devfest/and_icon.png')"
          class
          width="80"
        ></v-img>
      </v-flex>
      <v-flex xs12 sm6 md6 lg6 class="pa-2 my-0 text-xs-center">
        <p class="google-font" style="font-size:250%;">技術を体験しよう</p>
      </v-flex>
      <v-flex xs12 sm2 md2 lg2 class="pa-2 text-xs-center">
        <v-img
          :src="require('@/assets/img/devfest/go_icon.png')"
          :lazy-src="require('@/assets/img/devfest/go_icon.png')"
          class
          width="80"
        ></v-img>
      </v-flex>
    </v-layout>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 md9 lg9 class="pa-2 text-xs-center">
        <p
          class="google-font"
        >DevFest は、Google Developer Group (GDG) コミュニティによって世界各地で開かれるデベロッパー向けイベントです。東京では、Android、Google Cloud Platform（GCP）、Web、Firebase、Machine Learning （ML）、Assistant、Flutter、Goといった様々な技術の最新情報や現場でのノウハウを一日で学べるコミュニティイベントとして開催しています。去年に引き続き 4 回目の開催となります。</p>
        <p
          class="google-font"
        >The DevFest, or 'Developer Festival', is a technical conference for developers. It is aimed at students, professionals or simply curious techies.</p>
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
