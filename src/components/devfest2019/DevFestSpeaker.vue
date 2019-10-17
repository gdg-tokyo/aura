<template>
  <v-container class="pa-0">
    <!-- Speakerタイトル -->
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
        <p class="google-font display-2">Speakers</p>
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
        <v-dialog v-model="dialog" width="70%">
          <template v-slot:activator="{ on }">
            <div class="text-xs-center ma-1 pa-1 py-5 my-0">
              <v-avatar size="70%">
                <v-img :src="item.profileImage" :lazy-src="item.profileImage" v-on="on">
                  <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </v-img>
              </v-avatar>
              <p class="mt-3 mb-0 google-font" style="font-size:130%">{{item.name}}</p>
            </div>
          </template>
          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>{{item.name}}</v-card-title>
            <v-card-text>ここに所属/肩書が入ります。</v-card-text>
            <v-divider></v-divider>
            <v-layout wrap row fill-height class="my-3 pa-4">
            <v-flex xs12 sm2 md2 lg2 class="pa-2">
              <v-avatar size="100%">
                <v-img :src="item.profileImage" :lazy-src="item.profileImage" v-on="on">
                  <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </v-img>
              </v-avatar>
            </v-flex>
            <v-flex xs12 sm8 md8 lg8 class="pa-2">
              <v-card-text>ここにスピーカーの紹介が入ります。ここにスピーカーの紹介が入ります。ここにスピーカーの紹介が入ります。ここにスピーカーの紹介が入ります。ここにスピーカーの紹介が入ります。ここにスピーカーの紹介が入ります。ここにスピーカーの紹介が入ります。ここにスピーカーの紹介が入ります。ここにスピーカーの紹介が入ります。</v-card-text>
              <!-- <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">I accept</v-btn>
              </v-card-actions>-->
            </v-flex>
            </v-layout>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
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
