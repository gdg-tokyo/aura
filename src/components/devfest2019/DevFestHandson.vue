<template>
  <v-container class="pa-0">
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 sm2 md2 lg2 class="pa-2">
        <v-img
          src="/img/devfest2019/kit/image08.png"
          lazy-src="/img/devfest2019/kit/image08.png"
          width="250"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
      <v-flex xs12 sm7 md7 lg7 class="pa-2 text-xs-center">
        <p class="google-font display-2">Hands-on Teachers</p>
      </v-flex>
      <v-flex xs12 sm2 md2 lg2 class="pa-2">
        <v-img
          src="/img/devfest2019/kit/image09.png"
          lazy-src="/img/devfest2019/kit/image09.png"
          width="250"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
    </v-layout>
    <v-layout wrap align-start justify-center row fill-height class="my-3">
      <v-flex
        xs6
        sm3
        md3
        lg3
        offset-sm1
        offset-md1
        offset-lg1
        v-for="(item, i) in workshops"
        :key="i"
        class="text-xs-center"
        style="text-align:center"
      >
        <v-dialog width="80%">
          <template v-slot:activator="{ on }">
            <div class="text-xs-center ma-1 pa-1 py-5 my-0">
              <v-avatar size="70%" style="cursor: pointer">
                <v-img
                  :src="getStorageUrl(item.profileImage)"
                  :lazy-src="getStorageUrl(item.profileImage)"
                  v-on="on"
                >
                  <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </v-img>
              </v-avatar>
              <p class="mt-3 mb-0 google-font" style="font-size:130%">
                {{item.name}}
                <v-btn class="mt-0 mx-0" icon :href="item.link" target="_blank">
                  <v-icon small style="color:#333333">fas fa-link</v-icon>
                </v-btn>
                <br />
                {{item.englishName}}
              </p>
            </div>
          </template>
          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>{{item.name}}</v-card-title>
            <v-divider></v-divider>
            <v-layout wrap row fill-height justify-center class="pa-4">
              <v-flex xs12 sm10 md4 lg2 class="pa-2">
                <v-responsive :aspect-ratio="1/1">
                  <v-avatar size="100%">
                    <v-img
                      :src="getStorageUrl(item.profileImage)"
                      :lazy-src="getStorageUrl(item.profileImage)"
                    >
                      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-layout>
                    </v-img>
                  </v-avatar>
                </v-responsive>
              </v-flex>
              <v-flex xs12 sm12 md8 lg10 class="pa-2">
                <v-card-text>
                  <p>Profile</p>
                  <p style="white-space:pre-wrap; word-wrap:break-word;">{{item.profile}}</p>
                </v-card-text>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout v-if="item.tutor" wrap row fill-height justify-center class="pa-4">
              <v-flex xs12 sm10 md4 lg2 class="pa-2">
                <v-responsive :aspect-ratio="1/1">
                  <v-avatar size="100%">
                    <v-img
                      :src="getStorageUrl(item.tutor.profileImage)"
                      :lazy-src="getStorageUrl(item.tutor.profileImage)"
                    >
                      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-layout>
                    </v-img>
                  </v-avatar>
                </v-responsive>
              </v-flex>
              <v-flex xs12 sm12 md8 lg10 class="pa-2">
                <v-card-text>
                  <p>講師Profile</p>
                  <p style="font-size:150%;">{{item.tutor.name}}</p>
                  <p>{{item.tutor.position}}</p>
                  <p style="white-space:pre-wrap; word-wrap:break-word;">{{item.tutor.profile}}</p>
                </v-card-text>
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
import Mixin from "@/mixin.js";
export default {
  data() {
    return {
      workshops: DevFestInfo.Workshops
    };
  },
  mixins: [Mixin]
};
</script>
