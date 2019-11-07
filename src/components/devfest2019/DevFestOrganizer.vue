<template>
  <v-container class="pa-0">
    <!-- Organizerタイトル -->
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 sm2 md2 lg2 class="pa-2">
        <v-img
          src="/img/devfest2019/kit/image02.png"
          lazy-src="/img/devfest2019/kit/image02.png"
          width="250"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
      <v-flex xs12 sm7 md7 lg7 class="pa-2 text-xs-center">
        <p class="google-font display-2">Organizers</p>
      </v-flex>
      <v-flex xs12 sm2 md2 lg2 class="pa-2">
        <v-img
          src="/img/devfest2019/kit/image03.png"
          lazy-src="/img/devfest2019/kit/image03.png"
          width="250"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
    </v-layout>
    <!-- Organizer本体 -->
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs10 sm8 md6 lg4 class="text-xs-center">
        <v-img src="/img/devfest2019/gdgtokyo.png"
        lazy-src="/img/devfest2019/gdgtokyo.png"
        ></v-img>
      </v-flex>
      <v-flex xs10 sm8 md6 lg4 class="pa-2 text-xs-center">
        <p class="google-font"><a href="https://gdg-tokyo.connpass.com/">GDG Tokyo</a>は主にGoogleのテクノロジーに興味のある人たちで情報を共有しあう集いです。平日夜や週末に東京で勉強会等を行っています。<br></p>
          <v-col cols="12" sm="3">
            <v-btn text v-for="(item, i) in socialLinks" :key="i" icon :color="item.color" :href="item.link">
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-btn>
          </v-col>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
export default {
  data() {
    return {
      socialLinks:ChapterDetails.socialLinks
    };
  }
};
</script>