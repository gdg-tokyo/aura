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
      <v-flex
        xs6
        sm3
        md3
        lg3
        v-for="(item, i) in organizers"
        :key="i"
        class="text-xs-center"
        style="text-align:center"
      >
        <div class="text-xs-center ma-1 pa-1 py-5 my-0">
          <v-avatar size="70%">
            <v-img :src="item.profileImage" :lazy-src="item.profileImage">
              <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </v-img>
          </v-avatar>
          <p class="mt-3 mb-0 google-font" style="font-size:130%">
            {{item.name}}
            <v-btn
              class="mt-0 mx-0"
              icon
              v-if="(item.twitter).length>0"
              :href="item.twitter"
              target="_blank"
            >
              <v-icon small style="color:#1da1f2">fab fa-twitter</v-icon>
            </v-btn>
          </p>
        </div>
      </v-flex>
    </v-layout>
    <!-- パートナー本体 -->
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
      organizers: DevFestInfo.Organizers,
      partners: DevFestInfo.Partners
    };
  }
};
</script>
