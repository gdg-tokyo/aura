<template>
  <v-container class="pa-0">
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 sm7 md7 lg7 class="pa-2 text-xs-center">
        <p class="google-font" style="font-size:350%;">Schedule</p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs0 sm1 md1 lg1 class="pa-2 text-xs-left"></v-flex>
      <v-flex xs4 sm3 md3 lg3 class="pa-2 text-xs-left">
        <p
          class="google-font"
          style="font-size:200%; font-weight: bold; color: #fabb01;"
        >Day1</p>
        <p class="google-font" style="font-size:150%;">2020年10月17日（土）</p>
      </v-flex>
      <v-flex xs7 sm7 md7 lg7 class="pa-2 text-xs-left">
        <p class="google-font">
          開催時間 : 11:00 - 19:00
        </p>
        <p class="google-font">
          開催場所 : オンライン
        </p>
        <p style="font-size:130%; font-weight: bold; color: #fabb01;">Android, Flutter, ML</p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs0 sm1 md1 lg1 class="pa-2 text-xs-left"></v-flex>
      <v-flex xs4 sm3 md3 lg3 class="pa-2 text-xs-left">
        <p
          class="google-font"
          style="font-size:200%; font-weight: bold; color: #34a851;"
        >Day2</p>
        <p class="google-font" style="font-size:150%;">2020年10月18日（日）</p>
      </v-flex>
      <v-flex xs7 sm7 md7 lg7 class="pa-2 text-xs-left">
        <p class="google-font">
          開催時間 : 11:00 - 19:00
        </p>
        <p class="google-font">
          開催場所 : オンライン
        </p>
        <p style="font-size:130%; font-weight: bold; color: #34a851;">Cloud, GoogleAppScript</p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
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
