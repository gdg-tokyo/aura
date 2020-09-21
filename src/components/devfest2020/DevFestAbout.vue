<template>
  <v-container class="pa-0">
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 md9 lg9 class="pa-2 text-xs-center">
        <p class="google-font" style="font-size:350%;">About</p>
      </v-flex>
    </v-layout>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 md9 lg9 class="pa-2 text-xs-left">
        <p
          class="google-font"
        >DevFest は、Google Developer Group (GDG) コミュニティによって世界各地で開かれるデベロッパー向けイベントです。<br>日本では、9つのGDGチャプターとWTMが共催という形で、Android、Google Cloud Platform（GCP）、Web、Firebase、Machine Learning （ML）、Assistant、Flutter、Goといった様々な技術の最新情報や現場でのノウハウを2日で学べるコミュニティイベントとして開催します。<br>GDG Shinsyu, GDG Fukushima, GDG Tokyo, WTM Tokyo, GDG Kyoto, GDG Osaka, GDG Nagoya, GDG Shikoku, GDG Yamaguchi, GDG Kyusyu</p>
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
