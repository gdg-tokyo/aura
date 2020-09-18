<template>
  <v-container class="pa-0">
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 sm2 md2 lg2 class="pa-2">
        <v-img
          src="/img/devfest2020/kit/image02.png"
          lazy-src="/img/devfest2020/kit/image02.png"
          width="250"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
      <v-flex xs12 sm7 md7 lg7 class="pa-2 text-xs-center">
        <p class="google-font" style="font-size:350%;">About</p>
      </v-flex>
      <v-flex xs12 sm2 md2 lg2 class="pa-2">
        <v-img
          src="/img/devfest2020/kit/image03.png"
          lazy-src="/img/devfest2020/kit/image03.png"
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
        <p class="google-font" style="font-size:200%; font-weight: bold;">GDG DevFest Tokyo 2020</p>
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
        <p class="google-font" style="font-size:150%;">2020年10月17日（土）</p>
      </v-flex>
      <v-flex xs7 sm7 md7 lg7 class="pa-2 text-xs-left">
        <p style="font-size:130%; font-weight: bold; color: #537dbf;">Sessions</p>
        <p class="google-font">
          11:00 開始（開場10:30予定）18:00終了
          <br />※終了後、懇親会パーティを開催します。
        </p>
        <p class="google-font">
          開催場所：オンライン
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
        <p class="google-font" style="font-size:150%;">2020年10月18日（日）</p>
      </v-flex>
      <v-flex xs7 sm7 md7 lg7 class="pa-2 text-xs-left">
        <p style="font-size:130%; font-weight: bold; color: #34a851;">Sessions</p>
        <p class="google-font">
          11:00 開始（開場10:30予定）18:00終了
          <br />※終了後、懇親会パーティを開催します。
        </p>
        <p class="google-font">
          開催場所：オンライン
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
