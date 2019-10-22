<template>
  <v-container class="pa-0">
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 sm2 md2 lg2 class="pa-2">
        <v-img
          :src="require('@/assets/img/devfest2019/image02.png')"
          :lazy-src="require('@/assets/img/devfest2019/image02.png')"
          width="250"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
      <v-flex xs12 sm7 md7 lg7 class="pa-2 text-xs-center">
        <p class="google-font" style="font-size:350%;">About</p>
      </v-flex>
      <v-flex xs12 sm2 md2 lg2 class="pa-2">
        <v-img
          :src="require('@/assets/img/devfest2019/image03.png')"
          :lazy-src="require('@/assets/img/devfest2019/image03.png')"
          width="250"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs0 sm1 md1 lg1 class="pa-2 text-xs-left"></v-flex>
      <v-flex xs4 sm3 md3 lg3 class="pa-2 text-xs-left">
        <p class="google-font" style="font-size:150%;">名称</p>
      </v-flex>
      <v-flex xs7 sm7 md7 lg7 class="pa-2 text-xs-left">
        <p class="google-font" style="font-size:200%; font-weight: bold;">GDG DevFest Tokyo 2019</p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs0 sm1 md1 lg1 class="pa-2 text-xs-left"></v-flex>
      <v-flex xs4 sm3 md3 lg3 class="pa-2 text-xs-left">
        <p
          class="google-font"
          style="font-size:200%; font-weight: bold; color: #fabb01;"
        >DevFest Day1</p>
        <p class="google-font" style="font-size:150%;">2019年12月14日（土）</p>
      </v-flex>
      <v-flex xs7 sm7 md7 lg7 class="pa-2 text-xs-left">
        <p style="font-size:130%; font-weight: bold; color: #537dbf;">Sessions、Codelabos、After Party</p>
        <p class="google-font">
          11:00 開始（開場10:30予定）18:00終了
          <br />※終了後、懇親会パーティを開催します。
        </p>
        <p class="google-font">
          開催場所：国立大学法人電気通信大学
          <br />〒182-8585東京都調布市調布ヶ丘1-5-1
        </p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs0 sm1 md1 lg1 class="pa-2 text-xs-left"></v-flex>
      <v-flex xs4 sm3 md3 lg3 class="pa-2 text-xs-left">
        <p
          class="google-font"
          style="font-size:200%; font-weight: bold; color: #fabb01;"
        >DevFest Day2</p>
        <p class="google-font" style="font-size:150%;">2019年12月15日（日）</p>
      </v-flex>
      <v-flex xs7 sm7 md7 lg7 class="pa-2 text-xs-left">
        <p style="font-size:130%; font-weight: bold; color: #34a851;">Special Hands-on、Office Tour</p>
        <p class="google-font">
          14:00 〜 17:00予定
          <br />※14日にご参加いただいた方の中から抽選で100名様ご招待
        </p>
        <p class="google-font">
          開催場所：Google Japan
          <br />〒150-0002 東京都渋谷区渋谷3丁目21−3
        </p>
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
