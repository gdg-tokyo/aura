<template>
  <v-container class="pa-0">
    <v-flex v-for="(item, i) in partners" :key="i">
      <v-layout
        wrap
        align-center
        justify-center
        row
        fill-height
        class="my-3"
        v-if="(item.designation).length>0"
      >
        <v-flex xs12 sm7 md7 lg7 class="pa-2 text-xs-center">
          <p class="google-font display-1">{{ item.designation }}</p>
        </v-flex>
      </v-layout>
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 sm8 md5 lg5>
          <a :href="item.link" target="_blank">
            <v-img :src="item.logo" :lazy-src="item.logo" width="80%" style="margin:0 auto;"></v-img>
          </a>
        </v-flex>
      </v-layout>
      <br />
      <br />
    </v-flex>
  </v-container>
</template>

<script>
import DevFestInfo from "@/assets/data/devfest2019.json";
export default {
  data() {
    return {
      partners: DevFestInfo.Partners
    };
  }
};
</script>
