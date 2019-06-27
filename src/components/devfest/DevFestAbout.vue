<template>
  <v-container class="pa-0">
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 sm2 md2 lg2 class="pa-2">
        <v-img
          :src="require('@/assets/img/devfest/image02.png')"
          :lazy-src="require('@/assets/img/devfest/image02.png')"
          width="250"
        ></v-img>
      </v-flex>
      <v-flex xs12 sm7 md7 lg7 class="pa-2 text-xs-center">
        <p class="google-font" style="font-size:350%;">About</p>
      </v-flex>
      <v-flex xs12 sm2 md2 lg2 class="pa-2">
        <v-img
          :src="require('@/assets/img/devfest/image03.png')"
          :lazy-src="require('@/assets/img/devfest/image03.png')"
          width="250"
        ></v-img>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs1 sm1 md1 lg1 class="pa-2 text-xs-left">
      </v-flex>
      <v-flex xs3 sm3 md3 lg3 class="pa-2 text-xs-left">
        <p class="google-font">名称</p>
      </v-flex>
      <v-flex xs8 sm8 md8 lg8 class="pa-2 text-xs-left">
        <p class="google-font" style="font-size:200%;">GDG DevFest Tokyo 2019</p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs1 sm1 md1 lg1 class="pa-2 text-xs-left">
      </v-flex>
      <v-flex xs3 sm3 md3 lg3 class="pa-2 text-xs-left">
        <p class="google-font">開催日時</p>
      </v-flex>
      <v-flex xs8 sm8 md8 lg8 class="pa-2 text-xs-left">
        <p class="google-font">2019年12月14日（土）11:00 開始（開場10:30予定）<br>18:00終了<br>※終了後、懇親会パーティを開催します</p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs1 sm1 md1 lg1 class="pa-2 text-xs-left">
      </v-flex>
      <v-flex xs3 sm3 md3 lg3 class="pa-2 text-xs-left">
        <p class="google-font">開催場所</p>
      </v-flex>
      <v-flex xs8 sm8 md8 lg8 class="pa-2 text-xs-left">
        <p class="google-font">Google Japan<br>〒150-0002 東京都渋谷区渋谷３丁目２１−３</p>
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
