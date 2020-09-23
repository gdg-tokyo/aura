<template>
  <v-container class="pa-0">
    <!-- Staffタイトル -->
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 sm7 md7 lg7 class="pa-2 text-xs-center">
        <p class="google-font display-2">Staff</p>
      </v-flex>
    </v-layout>
    <!-- Staff本体 -->
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 md6 lg6 class="pa-2 text-xs-left">
        <p class="google-font">GDG DevFest2020実行委員会<br>実行委員長 Shoko Sato(GDG Tokyo)<br>副実行委員長 sokume / Tsutomu Hayakawa(GDG Nagoya)<br>副実行委員長 furushin(GDG Osaka)</p>
      </v-flex>
    </v-layout>
    <!-- チャプター紹介 -->
    <v-layout wrap align-start justify-center row fill-height class="my-3">
      <v-flex
        xs8
        sm5
        md3
        lg3
        v-for="(item, i) in chapters"
        :key="i"
        class="text-xs-center"
        style="text-align:center"
      >
        <div class="text-xs-center ma-1 pa-1 my-0">
          <a :href="item.link" target="_blank">
            <v-img
              :src="item.logo"
              :lazy-src="item.logo"
              :alt="item.name"
            >
              <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </v-img>
          </a>
        </div>
        <v-flex xs12>
          <v-btn
            text
            v-for="(link, j) in item.socialLinks"
            :key="j"
            icon
            :color="link.color"
            :href="link.link"
          >
            <v-icon color="white">{{ link.icon }}</v-icon>
          </v-btn>
        </v-flex>
        <p class="pa-2 google-font">{{ item.detail }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DevFestDetails from "@/assets/data/devfest2020.json";
import Mixin from "@/mixin.js";
export default {
  data() {
    return {
      chapters: DevFestDetails.Chapters
    };
  },
  mixins: [Mixin]
};
</script>